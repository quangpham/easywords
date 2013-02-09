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
    PFObject *testObject = [PFObject objectWithClassName:@"TestObject"];
    
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
    NSString *datestring=[NSString stringWithFormat:@"%@ %@",[[PFUser currentUser] username] , [dateFormatter stringFromDate:[NSDate date]]];
    
    [testObject setObject: datestring forKey:@"text"];
    [testObject setObject:[NSDate date] forKey:@"date"];
    
    NSDictionary *dictionary = [NSDictionary dictionaryWithObjectsAndKeys:@"number", @"number",
                                @"asdad", @"string",
                                nil];
    
    [testObject setObject:dictionary forKey:@"dictionary"];
    
    [testObject setObject:self.firstNameText.text forKey:@"firstname"];
    [testObject setObject:self.lastNameText.text forKey:@"lastname"];
    
    
    // set object with user
    [testObject setObject:[PFUser currentUser] forKey:@"author"];
    //
    //    // ACL permissions
    PFACL *acl = [PFACL ACLWithUser:[PFUser currentUser]];
    [acl setPublicReadAccess:YES];
    [testObject setACL:acl];
    
    //[testObject saveEventually];
    //[testObject save];
    [testObject saveEventually:^(BOOL succeeded, NSError *error) {
        if (!error) {
            NSLog(@"Sucessful");
            //[self dismissViewControllerAnimated:YES completion:nil];
        
        } else {
            NSLog(@"Not successful");
        }
    }];
    
    [self dismissViewControllerAnimated:YES completion:nil];
    [self.navigationController popToRootViewControllerAnimated:YES];
    
    
}
@end
