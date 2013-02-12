#import "NSString+URLEncoding.h"

@implementation NSString (URLEncoding)

- (NSString*)URLEncodedString
{
    CFStringRef encodedCFString = CFURLCreateStringByAddingPercentEscapes(
                                    kCFAllocatorDefault, (__bridge CFStringRef)self, NULL,(CFStringRef)@"!'’\"();:@&=+$,/?%#[]% ", kCFStringEncodingUTF8);    
#if __has_feature(objc_arc)
    NSString *encodedString = CFBridgingRelease(encodedCFString);
#else
    NSString* encodedString = [((__bridge NSString*) encodedCFString) autorelease];
#endif
    
    return encodedString;
}

- (NSString*)URLDecodedString
{
    CFStringRef decodedCFString = CFURLCreateStringByReplacingPercentEscapesUsingEncoding(
                                    kCFAllocatorDefault, (__bridge CFStringRef)self, CFSTR(""), kCFStringEncodingUTF8);
#if __has_feature(objc_arc)
    NSString *decodedString = CFBridgingRelease(decodedCFString);
#else
    NSString* decodedString = [((__bridge NSString*) decodedCFString) autorelease];
#endif
    
    return decodedString;
}

@end
