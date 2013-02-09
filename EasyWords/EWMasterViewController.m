//
//  EWMasterViewController.m
//  EasyWords
//
//  Created by Pham on 2/8/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import "EWMasterViewController.h"
#import <Parse/Parse.h>

@interface EWMasterViewController () {
    NSMutableArray *_objects;
}
@end

@implementation EWMasterViewController

- (void)awakeFromNib
{
    [super awakeFromNib];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    self.navigationItem.leftBarButtonItem = self.editButtonItem;

    UIBarButtonItem *addButton = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemAdd target:self action:@selector(insertNewObject:)];
    self.navigationItem.rightBarButtonItem = addButton;
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)insertNewObject:(id)sender
{
    if (!_objects) {
        _objects = [[NSMutableArray alloc] init];
    }
    [_objects insertObject:[NSDate date] atIndex:0];
    NSIndexPath *indexPath = [NSIndexPath indexPathForRow:0 inSection:0];
    [self.tableView insertRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationAutomatic];
    
    
    // QUANG
    PFObject *testObject = [PFObject objectWithClassName:@"TestObject"];
    
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
    NSString *datestring=[NSString stringWithFormat:@"%@ %@",[[PFUser currentUser] username] , [dateFormatter stringFromDate:[NSDate date]]];
    
    [testObject setObject: datestring forKey:@"text"];
    [testObject setObject:[NSDate date] forKey:@"date"];
    
    
    
    // set object with user
    [testObject setObject:[PFUser currentUser] forKey:@"author"];
//    
//    // ACL permissions
    PFACL *acl = [PFACL ACLWithUser:[PFUser currentUser]];
    [acl setPublicReadAccess:YES];
    [testObject setACL:acl];
    
    //[testObject saveEventually];
    [testObject save];
    
    
//    // Create a new Post object and create relationship with PFUser
//    PFObject *newPost = [PFObject objectWithClassName:@"Post"];
//    [newPost setObject:[textView text] forKey:@"textContent"];
//    [newPost setObject:[PFUser currentUser] forKey:@"author"]; // One-to-Many relationship created here!
//    
//    //Set ACL permissions for added security
//    PFACL *postACL = [PFACL ACLWithUser:[PFUser currentUser]];
//    [postACL setPublicReadAccess:YES];
//    [newPost setACL:postACL];
//    
//    // Save new Post object in Parse
//    [newPost saveInBackgroundWithBlock:^(BOOL succeeded, NSError *error) {
//        if (!error) {
//            [self dismissModalViewControllerAnimated:YES]; // Dismiss the viewController upon success
//        }
//    }];
}

#pragma mark - Table View

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return _objects.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"Cell" forIndexPath:indexPath];

    NSDate *object = _objects[indexPath.row];
    cell.textLabel.text = [object description];
    return cell;
}

- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the specified item to be editable.
    return YES;
}

- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        [_objects removeObjectAtIndex:indexPath.row];
        [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
    } else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view.
    }
}

/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath
{
}
*/

/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/


- (IBAction)buttonTapped:(id)sender {
    PFQueryTableViewController *tableController = [[PFQueryTableViewController alloc] initWithClassName:@"TestObject"];
    tableController.textKey = @"text";
    [self.navigationController pushViewController:tableController animated:YES];
    //[self presentViewController:tableController animated:YES completion:nil];
}

- (IBAction)button2Tapped:(id)sender {
    UIViewController *vcToGo = nil;
    UIStoryboard *storyBoard = [[UIStoryboard storyboardWithName:@"MainStoryboard" bundle:nil] init];
    vcToGo = [storyBoard instantiateViewControllerWithIdentifier:@"EWEmptyViewController"];
    [self.navigationController pushViewController:vcToGo animated:YES];
}

- (IBAction)fbLoginTapped:(id)sender {
    //NSArray *permissionsArray = @[ @"user_about_me", @"user_relationships", @"user_birthday", @"user_location"];
    
    // Login PFUser using Facebook
//    [PFFacebookUtils logInWithPermissions:permissionsArray block:^(PFUser *user, NSError *error) {
//        [_activityIndicator stopAnimating]; // Hide loading indicator
//        
//        if (!user) {
//            if (!error) {
//                NSLog(@"Uh oh. The user cancelled the Facebook login.");
//            } else {
//                NSLog(@"Uh oh. An error occurred: %@", error);
//            }
//        } else if (user.isNew) {
//            NSLog(@"User with facebook signed up and logged in!");
//            [self.navigationController pushViewController:[[UserDetailsViewController alloc] initWithStyle:UITableViewStyleGrouped] animated:YES];
//        } else {
//            NSLog(@"User with facebook logged in!");
//            [self.navigationController pushViewController:[[UserDetailsViewController alloc] initWithStyle:UITableViewStyleGrouped] animated:YES];
//        }
//    }];
    

}
@end
