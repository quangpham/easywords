//
//  EWTranslateViewController.h
//  EasyWords
//
//  Created by Pham on 2/12/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface EWTranslateViewController : UIViewController

@property (weak, nonatomic) IBOutlet UITextField *keywordText;
@property (weak, nonatomic) IBOutlet UIImageView *imageTest;

- (IBAction)translateButtonDidTapped:(id)sender;
- (IBAction)speakA:(id)sender;
- (IBAction)speakB:(id)sender;

@end
