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
    
    
    NSDictionary *responseTranslate = [self translate: self.keywordText.text from:@"en" to:@"fi"];
    
    if (responseTranslate) {
        NSString *trans = [[[responseTranslate objectForKey:@"sentences"] firstObject] objectForKey:@"trans"];
        //NSLog(@"QUANG ... Response %@", [responseTranslate objectForKey:@"sentences"]);
        NSLog(@"QUANG ... %@", trans);
    }
    
}

- (void)injectInitialJS
{
    NSString *injectedJSString = @"function tranlateRequest(a,b,c){var d=null;d=new XMLHttpRequest();d.open('GET','http://translate.google.com/translate_a/t?client=webapp&hl=en&sc=1&q='+a+'&sl='+b+'&tl='+c,false);d.send(null);return d.responseText}";
    [self.translateWebview stringByEvaluatingJavaScriptFromString:injectedJSString];
}

- (NSDictionary *)translate:(NSString*)keyword from:(NSString*)from to:(NSString*)to
{
    // TO DO : CHECK FOR SPECIAL CHARACTER ERROR
    NSString *translateRequest = [NSString stringWithFormat:@"tranlateRequest('%@','%@','%@');", [keyword URLEncodedString], from, to];
    NSString *reponseString = [self.translateWebview stringByEvaluatingJavaScriptFromString:translateRequest];
    //NSLog(@"Json data %@", reponseString);
    
    // Process json data
    if ([reponseString isEqualToString:@""]) return nil;
    
    NSData* data = [reponseString dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *jsonObject = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:nil];
    //NSLog(@"Objective-C dictionary %@", jsonObject);
    
    // SAVE TRANSLATION DATA TO PARSE.COM
    [self saveTranslationObjectIntoParse:keyword from:from to:to translation:jsonObject];
    
    return jsonObject;
}

- (void)saveTranslationObjectIntoParse:(NSString*)keyword from:(NSString*)from to:(NSString*)to translation:(NSDictionary*)translation
{
    PFQuery *query = [PFQuery queryWithClassName:@"Vocabulary"];
    [query whereKey:@"dict_type" equalTo:[NSString stringWithFormat:@"%@_%@", from, to]];
    [query whereKey:@"keyword" equalTo:keyword];
    [query findObjectsInBackgroundWithBlock:^(NSArray *objects, NSError *error) {
        if (!error) {            
            if (objects.count == 0) {
                PFObject *word = [PFObject objectWithClassName:@"Vocabulary"];
                [word setObject:keyword forKey:@"keyword"];
                [word setObject:[NSString stringWithFormat:@"%@_%@", from, to] forKey:@"dict_type"];
                [word setObject:translation forKey:@"translation"];
                [word setObject:[NSNumber numberWithInteger:1] forKey:@"score"];
                /*
                 // set object with user
                 [word setObject:[PFUser currentUser] forKey:@"author"];
                 
                 // ACL permissions
                 PFACL *acl = [PFACL ACLWithUser:[PFUser currentUser]];
                 [acl setPublicReadAccess:YES];
                 [word setACL:acl];
                 */
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
@end
