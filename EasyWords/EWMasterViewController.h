//
//  EWMasterViewController.h
//  EasyWords
//
//  Created by Pham on 2/8/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Parse/Parse.h>

@interface EWMasterViewController : PFQueryTableViewController
@property (weak, nonatomic) IBOutlet UIButton *buttonDidTapped;
- (IBAction)buttonTapped:(id)sender;
- (IBAction)fbLoginTapped:(id)sender;
- (IBAction)translateButtonDidTapped:(id)sender;

@end
