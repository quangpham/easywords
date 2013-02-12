//
//  EWTranslateViewController.h
//  EasyWords
//
//  Created by Pham on 2/12/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface EWTranslateViewController : UIViewController
@property (weak, nonatomic) IBOutlet UIWebView *translateWebview;
- (IBAction)translateButtonDidTapped:(id)sender;
@property (weak, nonatomic) IBOutlet UITextField *keywordText;
@property (weak, nonatomic) IBOutlet UIWebView *googleImageWebview;

@end
