//
//  EWTranslateViewController.m
//  EasyWords
//
//  Created by Pham on 2/12/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import "EWTranslateViewController.h"

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
    
    NSDictionary *responseTranslate = [self translate:self.keywordText.text from:@"en" to:@"fi"];
    NSLog(@"QUANG ... Response %@", [responseTranslate objectForKey:@"sentences"]);
}

- (void)injectInitialJS
{
    NSString *injectedJSString = @"function tranlateRequest(a,b,c){var d=null;d=new XMLHttpRequest();d.open('GET','http://translate.google.com/translate_a/t?client=webapp&hl=en&sc=1&q='+a+'&sl='+b+'&tl='+c,false);d.send(null);return d.responseText}";
    
    [self.translateWebview stringByEvaluatingJavaScriptFromString:injectedJSString];
}

- (NSDictionary *)translate:(NSString*)keyword from:(NSString*)from to:(NSString*)to
{
    // TO DO : CHECK FOR SPECIAL CHARACTER ERROR
    NSString *translateRequest = [NSString stringWithFormat:@"tranlateRequest('%@','%@','%@');", keyword, from, to];
    NSString *reponseString = [self.translateWebview stringByEvaluatingJavaScriptFromString:translateRequest];
    NSLog(@"Json data %@", reponseString);
    
    // Process json data
    if ([reponseString isEqualToString:@""]) return nil;
    
    NSData* data = [reponseString dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *jsonObject = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:nil];
    NSLog(@"Objective-C dictionary %@", jsonObject);
    
    return jsonObject;
}
@end
