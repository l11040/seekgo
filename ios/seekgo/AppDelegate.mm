#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h> // React Native 번들 URL 제공자
#import <RNSplashScreen.h>             // Splash Screen

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"seekgo";
  self.initialProps = @{};

  BOOL didFinishLaunchingWithOptions = [super application:application didFinishLaunchingWithOptions:launchOptions];

  [RNSplashScreen show];

  return didFinishLaunchingWithOptions;
}
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
