//
//  EWInsertViewController.m
//  EasyWords
//
//  Created by Pham on 2/9/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import "EWInsertViewController.h"
#import <Parse/Parse.h>

@interface EWInsertViewController ()

@end

@implementation EWInsertViewController

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
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)saveButtonDidTapped:(id)sender {
    // QUANG
    PFObject *person = [PFObject objectWithClassName:@"Person"];
    
    [person setObject:self.firstNameText.text forKey:@"firstname"];
    [person setObject:self.lastNameText.text forKey:@"lastname"];
    
    // set object with user
    [person setObject:[PFUser currentUser] forKey:@"author"];
    
    // ACL permissions
    PFACL *acl = [PFACL ACLWithUser:[PFUser currentUser]];
    [acl setPublicReadAccess:YES];
    [person setACL:acl];
    
    
    // Image
    UIImage *image = [UIImage imageNamed:@"1.jpg"];    
    NSData *imageData = UIImageJPEGRepresentation(image, 0.05f);
    PFFile *imageFile = [PFFile fileWithName:@"1.jpg" data:imageData];
    [person setObject:imageFile forKey:@"imageFile"];

    // Save data
    [person saveInBackgroundWithBlock:^(BOOL succeeded, NSError *error) {
        if (!error) {
            NSLog(@"Sucessful");
            [self.navigationController popToRootViewControllerAnimated:YES];
            [[NSNotificationCenter defaultCenter] postNotificationName:@"POST_SAVE_PERSON_DATA_SUCESSFUL" object:nil];
             //[[NSNotificationCenter defaultCenter] postNotificationName:notificationName object:nil userInfo:dictionary];
        } else {
            NSLog(@"Not successful");
        }
    }];
    
    //[person saveEventually];
    //[person save];
}
@end
