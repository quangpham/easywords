//
//  EWMasterViewController.h
//  EasyWords
//
//  Created by Pham on 2/8/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface EWMasterViewController : UITableViewController
@property (weak, nonatomic) IBOutlet UIButton *buttonDidTapped;
- (IBAction)buttonTapped:(id)sender;
- (IBAction)button2Tapped:(id)sender;

@end
