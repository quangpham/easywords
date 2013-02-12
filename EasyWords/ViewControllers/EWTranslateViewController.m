//
//  EWTranslateViewController.m
//  EasyWords
//
//  Created by Pham on 2/12/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import "EWTranslateViewController.h"
#import <Parse/Parse.h>
#import "NSString+URLEncoding.h"

@interface EWTranslateViewController ()
@property (nonatomic) BOOL isJavascriptInjected;
@end

@implementation EWTranslateViewController

@synthesize isJavascriptInjected;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
    
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:@"http://translate.google.com"]];
    [self.translateWebview loadRequest:request];
    
    self.isJavascriptInjected = NO;
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)translateButtonDidTapped:(id)sender {
    if (!self.isJavascriptInjected) {
        [self injectInitialJS];
        self.isJavascriptInjected = YES;
    }
    
    [self googleTranslateWord: [self.keywordText.text lowercaseString] from:@"en" to:@"fi"];
    
}

- (void)googleTranslateWord:(NSString*)keyword from:(NSString*)from to:(NSString*)to
{
    NSString *translateRequest = [NSString stringWithFormat:@"tranlateRequest('%@','%@','%@');", [keyword URLEncodedString], from, to];
    NSString *reponseString = [self.translateWebview stringByEvaluatingJavaScriptFromString:translateRequest];
    //NSLog(@"Json data %@", reponseString);
    
    if (![reponseString isEqualToString:@""]) {
        NSDictionary *data = [self rewriteGoogleTranslateResult:reponseString];
        
        UIAlertView *alert = [[UIAlertView alloc] initWithTitle:keyword message:[NSString stringWithFormat:@"%@", data] delegate:nil cancelButtonTitle:@"Okie" otherButtonTitles:nil];
        [alert show];
        
        [self saveTranslationToParse:keyword dictType:[NSString stringWithFormat:@"%@_%@", from, to] translation:data];
    }
}

- (void)saveTranslationToParse:(NSString*)keyword dictType:(NSString*)dictType translation:(NSDictionary*)translation
{
    PFQuery *query = [PFQuery queryWithClassName:@"Vocabulary"];
    [query whereKey:@"dict_type" equalTo:dictType];
    [query whereKey:@"keyword" equalTo:keyword];
    [query whereKey:@"author" equalTo:[PFUser currentUser]];
    [query findObjectsInBackgroundWithBlock:^(NSArray *objects, NSError *error) {
        if (!error) {            
            if (objects.count == 0) {
                PFObject *word = [PFObject objectWithClassName:@"Vocabulary"];
                [word setObject:keyword forKey:@"keyword"];
                [word setObject:dictType forKey:@"dict_type"];
                [word setObject:translation forKey:@"translation"];
                [word setObject:[NSNumber numberWithInteger:1] forKey:@"score"];
                
                 // set object with user
                 [word setObject:[PFUser currentUser] forKey:@"author"];
                 
                 // ACL permissions
                 PFACL *acl = [PFACL ACLWithUser:[PFUser currentUser]];
                 [acl setPublicReadAccess:YES];
                 [word setACL:acl];
                 
                [word saveInBackground];
            } else {
                PFObject *currentObject = (PFObject*)[objects lastObject];
                NSInteger myscore = [[currentObject valueForKey:@"score"] integerValue] + 1;
                [currentObject setObject:[NSNumber numberWithInteger:myscore] forKey:@"score"];
                [currentObject saveInBackground];
            }
            
        } else {
            NSLog(@"Error: %@ %@", error, [error userInfo]);
        }
    }];
}

- (void)injectInitialJS
{
    NSString *injectedJSString = @"function tranlateRequest(a,b,c){var d=null;d=new XMLHttpRequest();d.open('GET','http://translate.google.com/translate_a/t?client=webapp&hl=en&sc=1&q='+a+'&sl='+b+'&tl='+c,false);d.send(null);return d.responseText}";
    [self.translateWebview stringByEvaluatingJavaScriptFromString:injectedJSString];
}

- (NSDictionary *)rewriteGoogleTranslateResult:(NSString *)response
{
    NSData* rawdata = [response dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *data = [NSJSONSerialization JSONObjectWithData:rawdata options:kNilOptions error:nil];
    
    NSMutableArray *dict = [[NSMutableArray alloc] init];
    for (NSDictionary *d in [data objectForKey:@"dict"]) {
        NSDictionary *entry = [NSDictionary dictionaryWithObjectsAndKeys:
                               [d objectForKey:@"pos"], @"pos",
                               [d objectForKey:@"terms"], @"terms",
                               nil];
        [dict addObject:entry];
    }
    
    NSString *trans = [[[data objectForKey:@"sentences"] firstObject] objectForKey:@"trans"];
    
    NSDictionary *output = [NSDictionary dictionaryWithObjectsAndKeys:
                            trans, @"sentence",
                            dict, @"dict",
                            nil];
    return output;
}
@end
