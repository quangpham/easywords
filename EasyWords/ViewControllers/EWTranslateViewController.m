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
#import "Base64.h"
#import "MBProgressHUD.h"

@interface EWTranslateViewController () <UIWebViewDelegate>
@property (nonatomic) BOOL isJavascriptInjected;
@property (nonatomic, strong) UIWebView *googleImageWeb;
@property (nonatomic, strong) UIWebView *translateWebview;
@property (nonatomic, strong) MBProgressHUD *HUD;
@property (nonatomic, strong) NSDictionary *translationData;
@end

@implementation EWTranslateViewController

@synthesize isJavascriptInjected;
@synthesize googleImageWeb = _googleImageWeb;
@synthesize translateWebview = _translateWebview;
@synthesize HUD;
@synthesize translationData = _translationData;

// Lazy Init
- (NSDictionary *)translationData
{
    if (_translationData == nil) {
        _translationData = [[NSDictionary alloc] init];
    }
    return _translationData;
}

- (UIWebView *)googleImageWeb
{
    if (_googleImageWeb == nil) {
        _googleImageWeb = [[UIWebView alloc] initWithFrame:CGRectMake(0, 0, 320, 400)];
        _googleImageWeb.delegate = self;
    }
    return _googleImageWeb;
}

- (UIWebView *)translateWebview
{
    if (_translateWebview == nil) {
        _translateWebview = [[UIWebView alloc] init];
    }
    return _translateWebview;
}

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)initWebview
{
    [self.translateWebview loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"http://translate.google.com"]]];
    self.isJavascriptInjected = NO;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
    [self initWebview];
    
    self.keywordText.delegate = self;
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField
{
    
    
    if (textField == self.keywordText) {
        NSLog(@"QUANG ... textViewDidEndEditing");
        [self.keywordText resignFirstResponder];
        [self searchInProgres];
        return NO;
    }
    return YES;

}

- (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event
{
    [self.view endEditing:YES];
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    [self setGoogleImageWeb:nil];
    [self setTranslateWebview:nil];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)translateButtonDidTapped:(id)sender {
    
    [self searchInProgres];
}


- (void)searchInProgres
{
    [self.keywordText resignFirstResponder];
    
    if (!self.isJavascriptInjected) {
        [self injectInitialJS];
        self.isJavascriptInjected = YES;
    }
    
    NSString *keyword = [self.keywordText.text lowercaseString];
    self.translationData = [self translateWord: keyword from:@"en" to:@"fi"];
    
    if (self.translationData) {
        //[self googleImage:[self.translationData objectForKey:@"sentence"]];
        [self googleImage:keyword];
        [self saveTranslationToParse:keyword dictType:@"en_fi" data:self.translationData];
    }
}

// Google Translation Function
- (NSDictionary*)translateWord:(NSString*)keyword from:(NSString*)from to:(NSString*)to
{
    // getSoundTranslation FIX ME
    NSString *getSoundTranslateRequest = [NSString stringWithFormat:@"getSoundTranslation('%@','%@','%@');", [keyword URLEncodedString], from, to];
    [self.translateWebview stringByEvaluatingJavaScriptFromString:getSoundTranslateRequest];
    
    // Get JSON data from Google Translate
    NSString *getJSONTranslateRequest = [NSString stringWithFormat:@"getJSONTranslation('%@','%@','%@');", [keyword URLEncodedString], from, to];
    NSString *reponseString = [self.translateWebview stringByEvaluatingJavaScriptFromString:getJSONTranslateRequest];
    NSLog(@"QUANG ... %@", reponseString);
    
    if (![reponseString isEqualToString:@""]) {
        return [self rewriteGoogleTranslateResult:reponseString];
    } else {
        return nil;
    }
}

- (void)googleImage:(NSString*)keyword
{
    [self showHUD:@"Translating ..."];
    NSURL *requestURL = [NSURL URLWithString:[NSString stringWithFormat:@"https://www.google.com/search?um=1&ie=UTF-8&hl=en&tbm=isch&tbs=ift:jpg&q=%@", [keyword URLEncodedString]]];
    NSURLRequest *request = [NSURLRequest requestWithURL:requestURL];
    [self.googleImageWeb loadRequest:request];
}

// Webview Delegate
- (void)webViewDidFinishLoad:(UIWebView *)webView
{
    [self displayTranslationResult];
}

- (void)displayTranslationResult
{
    [self hideHUD];
    NSString *reponseString = [self.googleImageWeb stringByEvaluatingJavaScriptFromString:@"document.getElementById('is_rim_0_0').src;"];
    NSString *stringData = [reponseString stringByReplacingCharactersInRange:NSMakeRange(0, 23) withString:@""];
    UIImage *image = [UIImage imageWithData:[stringData base64DecodedData]];
    
    NSLog(@"QUANG ... %@", self.googleImageWeb.request.URL);
    self.imageTest.image = image;
}


- (IBAction)speakA:(id)sender {
    [self.translateWebview stringByEvaluatingJavaScriptFromString:@"_e(event, 'tts+6', 's')"];
}

- (IBAction)speakB:(id)sender {
    [self.translateWebview stringByEvaluatingJavaScriptFromString:@"_e(event, 'tts+6', 't')"];
}

- (IBAction)languageTest:(id)sender {
//    UIStoryboard *storyBoard = [[UIStoryboard storyboardWithName:@"MainStoryboard" bundle:nil] init];
//    UIViewController *vcToGo = [storyBoard instantiateViewControllerWithIdentifier:@"EWLanguageSelectionViewController"];
//    [self.navigationController pushViewController:vcToGo animated:YES];
    
    [self dismissViewControllerAnimated:YES completion:nil];
}


//- (BOOL)textView:(UITextView *)textView shouldChangeTextInRange:(NSRange)range replacementText:(NSString *)text {
//    
//    if([text isEqualToString:@"\n"]) {
//        [textView resignFirstResponder];
//        return NO;
//    }
//    
//    return YES;
//}


// HELPER FUNCTION
- (void)showHUD:(NSString *)title;
{
    self.HUD = [MBProgressHUD showHUDAddedTo:self.view animated:YES];
    self.HUD.mode = MBProgressHUDAnimationFade;
    self.HUD.labelText = title;
}

- (void)hideHUD
{
    [self.HUD hide:YES];
}

- (void)injectInitialJS
{
    NSString *injectedJSString = @"function getJSONTranslation(_keyword,_from,_to){var xmlHttp=null;xmlHttp=new XMLHttpRequest();xmlHttp.open('GET','http://translate.google.com/translate_a/t?client=webapp&hl=en&sc=1&q='+_keyword+'&sl='+_from+'&tl='+_to,false);xmlHttp.send(null);return xmlHttp.responseText}function getSoundTranslation(_keyword,_from,_to){document.getElementsByClassName('ls-select sl')[0].value=_from;document.getElementsByClassName('ls-select tl')[0].value=_to;document.getElementById('input-wrap').firstChild.value=_keyword;_e(event,'translate+2')}";
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

- (void)saveTranslationToParse:(NSString*)keyword dictType:(NSString*)dictType data:(NSDictionary*)data
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
                [word setObject:data forKey:@"translation"];
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
@end
