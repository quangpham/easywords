//
//  EWAppDelegate.m
//  EasyWords
//
//  Created by Pham on 2/8/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import "EWAppDelegate.h"
#import <Parse/Parse.h>

@implementation EWAppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // Override point for customization after application launch.
    
    [Parse setApplicationId:@"wnvHuW7piBbbWt0lCTrOcgq5RhmLKPRU2EL16a2j"
                  clientKey:@"R4eGn5RJrLl1iRiItBbUUToZLLJWafTqdRiufMmZ"];
    
    
    //[PFFacebookUtils initializeWithApplicationId:@"101064763411885"];
    
    [self createFakeUser];
    
    return YES;
}


- (void)createFakeUser
{
    /* MANUAL USER */

    PFUser *user = [PFUser user];
    user.username = @"Hung";
    user.password = @"password";
    user.email = @"hung@example.com";
    [user signUpInBackgroundWithBlock:^(BOOL succeeded, NSError *error) {
        if (!error) {
            // Hooray! Let them use the app now.
        } else {
            [PFUser logInWithUsername:@"Hung" password:@"password"];
        }
    }];
}

- (void)applicationWillResignActive:(UIApplication *)application
{
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
