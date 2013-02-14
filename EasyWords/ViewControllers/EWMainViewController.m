//
//  EWMainViewController.m
//  EasyWords
//
//  Created by Pham on 2/14/13.
//  Copyright (c) 2013 com.quangpham. All rights reserved.
//

#import "EWMainViewController.h"
#import "EWTranslateViewController.h"

@interface EWMainViewController () <UIScrollViewDelegate>
@property (nonatomic, strong) UIScrollView *bgScrollView;
@property (nonatomic, strong) UIScrollView *mainContentScrollView;
@end

@implementation EWMainViewController
@synthesize bgScrollView;
@synthesize mainContentScrollView;

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
    [self initBackgroundScrollView];
    [self initContentWrapper];
}

- (void)initBackgroundScrollView
{
    bgScrollView = [[UIScrollView alloc] initWithFrame:self.view.frame];
    [bgScrollView setContentSize:CGSizeMake(640, 568)];
    [bgScrollView setScrollEnabled:NO];
    [self.bgView addSubview:bgScrollView];
    
    UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 640, 568)];
    imageView.image = [UIImage imageNamed:@"bg.jpg"];
    [bgScrollView addSubview:imageView];
}

- (void)initContentWrapper
{
    mainContentScrollView = [[UIScrollView alloc] initWithFrame:self.view.frame];
    [mainContentScrollView setContentSize:CGSizeMake(320*5, 568)];
    [mainContentScrollView setPagingEnabled:YES];
    [self.contentView addSubview:mainContentScrollView];
    mainContentScrollView.delegate = self;
    
    UIStoryboard *storyBoard = [[UIStoryboard storyboardWithName:@"MainStoryboard" bundle:nil] init];
    EWTranslateViewController *vcToGo = [storyBoard instantiateViewControllerWithIdentifier:@"EWTranslateViewController"];
    [vcToGo.view setFrame:CGRectMake(0, 0, 320, 568)];
    [mainContentScrollView addSubview:vcToGo.view];
    
    EWTranslateViewController *vcToGo2 = [storyBoard instantiateViewControllerWithIdentifier:@"EWInsertViewController"];
    [vcToGo2.view setFrame:CGRectMake(320, 0, 320, 568)];
    [mainContentScrollView addSubview:vcToGo2.view];
    
    
    //[self.navigationController pushViewController:vcToGo animated:YES];
    

}

-(void)scrollViewDidScroll:(UIScrollView *)scrollView
{
    [self.bgScrollView setContentOffset:CGPointMake(scrollView.contentOffset.x * 70 / 320, 0)];
}

- (void)scrollViewDidEndDecelerating:(UIScrollView *)scrollView{
//    NSInteger a = (int)scrollView.contentOffset.x % 320;
//    NSLog(@"QUANG ... %f", scrollView.contentOffset.x);
    
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)testTap:(id)sender {
    [self.bgScrollView setContentOffset:CGPointMake(70*((UIButton*)sender).tag, 0) animated:YES];
    [self.mainContentScrollView setContentOffset:CGPointMake(320*((UIButton*)sender).tag, 0) animated:YES];
    NSLog(@"QUANG ... ");
}

- (void)scrollBackgroundView:(NSInteger)pos
{
    [self.bgScrollView setContentOffset:CGPointMake(70*pos, 0) animated:YES];
}
@end
