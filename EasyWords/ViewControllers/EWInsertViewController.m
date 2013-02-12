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
    
    /*
    // set object with user
    [person setObject:[PFUser currentUser] forKey:@"author"];
    
    // ACL permissions
    PFACL *acl = [PFACL ACLWithUser:[PFUser currentUser]];
    [acl setPublicReadAccess:YES];
    [person setACL:acl];
    */
    
    // Save Image Data
    UIImage *image = [self imageWithImage:self.userImage.image scaledToSize:CGSizeMake(150, 150)];
    NSData *imageData = UIImageJPEGRepresentation(image, 1.0);
    PFFile *imageFile = [PFFile fileWithName:@"1.jpg" data:imageData];
    [person setObject:imageFile forKey:@"imageFile"];
    
    HUD = [[MBProgressHUD alloc] initWithView:self.view];
    [self.view addSubview:HUD];
    // HUD.mode = MBProgressHUDModeIndeterminate;
    HUD.mode = MBProgressHUDModeDeterminate;
    HUD.delegate = self;
    HUD.labelText = @"Uploading ...";
    [HUD show:YES];
    
    [imageFile saveInBackgroundWithBlock:^(BOOL succeeded, NSError *error) {
        NSLog(@"Sucessful");
        [HUD hide:YES];
    } progressBlock:^(int percentDone) {
        HUD.progress = (float)percentDone/100;
    }];
    
    
    // Save data
    [person saveInBackgroundWithBlock:^(BOOL succeeded, NSError *error) {
        if (!error) {
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

- (UIImage *)imageWithImage:(UIImage *)image scaledToSize:(CGSize)newSize {
    //UIGraphicsBeginImageContext(newSize);
    UIGraphicsBeginImageContextWithOptions(newSize, NO, 0.0);
    [image drawInRect:CGRectMake(0, 0, newSize.width, newSize.height)];
    UIImage *newImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return newImage;
}

#pragma mark - HUB implementation
- (void)hudWasHidden:(MBProgressHUD *)hud
{
    [HUD removeFromSuperview];
    HUD = nil;
}
- (IBAction)pickPhotoButtonDidTapped:(id)sender {
    
    if ([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera] == YES) {
        // Create image picker controller
        UIImagePickerController *imagePicker = [[UIImagePickerController alloc] init];
        
        // Set source to the camera
        //imagePicker.sourceType = UIImagePickerControllerSourceTypeCamera;
        imagePicker.sourceType =  UIImagePickerControllerSourceTypeSavedPhotosAlbum;
        
        // Delegate is self
        imagePicker.delegate = self;
        
        // Show image picker
        //[self presentModalViewController:imagePicker animated:YES];
        [self presentViewController:imagePicker animated:YES completion:nil];
    }
}

- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info
{
    self.userImage.image = [info objectForKey:@"UIImagePickerControllerOriginalImage"];
    
    // Dismiss controller
    [picker dismissViewControllerAnimated:YES completion:nil];
}

- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker
{
    [picker dismissViewControllerAnimated:YES completion:nil];
}

#pragma mark -
@end
