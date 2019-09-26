# PDF View Ionic Crash

## Steps to Reproduce:

1. run these commands:

```
git clone https://github.com/mibzman/ionic-pdf-crash.git;
cd ionic-pdf-crash;
npm i;
npm i --only=dev;
ionic cordova platform add ios@5.0.0;
ionic cordova run ios --emulator -- --buildFlag="-UseModernBuildSystem=0";
```

2. click `Open Local PDF`
3. app crashes with this error:

```
*** Assertion failure in -[UIApplication _createStatusBarWithRequestedStyle:orientation:hidden:], /BuildRoot/Library/Caches/com.apple.xbs/Sources/UIKitCore_Sim/UIKit-3899.13.13/UIApplication.m:5240
2019-09-26 13:19:36.547090-0400 MyApp[46948:1478202] *** Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'App called -statusBar or -statusBarWindow on UIApplication: this code must be changed as there's no longer a status bar or status bar window. Use the statusBarManager object on the window scene instead.'
```
