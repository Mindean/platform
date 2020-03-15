gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDGrassPlatformObjects1= [];
gdjs.NewSceneCode.GDGrassPlatformObjects2= [];
gdjs.NewSceneCode.GDGrassPlatformObjects3= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObjectObjects3= [];
gdjs.NewSceneCode.GDBushObjects1= [];
gdjs.NewSceneCode.GDBushObjects2= [];
gdjs.NewSceneCode.GDBushObjects3= [];
gdjs.NewSceneCode.GDCloudObjects1= [];
gdjs.NewSceneCode.GDCloudObjects2= [];
gdjs.NewSceneCode.GDCloudObjects3= [];
gdjs.NewSceneCode.GDCoinObjects1= [];
gdjs.NewSceneCode.GDCoinObjects2= [];
gdjs.NewSceneCode.GDCoinObjects3= [];
gdjs.NewSceneCode.GDScoreObjects1= [];
gdjs.NewSceneCode.GDScoreObjects2= [];
gdjs.NewSceneCode.GDScoreObjects3= [];
gdjs.NewSceneCode.GDSlimeObjects1= [];
gdjs.NewSceneCode.GDSlimeObjects2= [];
gdjs.NewSceneCode.GDSlimeObjects3= [];
gdjs.NewSceneCode.GDleftObjects1= [];
gdjs.NewSceneCode.GDleftObjects2= [];
gdjs.NewSceneCode.GDleftObjects3= [];
gdjs.NewSceneCode.GDrightObjects1= [];
gdjs.NewSceneCode.GDrightObjects2= [];
gdjs.NewSceneCode.GDrightObjects3= [];
gdjs.NewSceneCode.GDcheckpointObjects1= [];
gdjs.NewSceneCode.GDcheckpointObjects2= [];
gdjs.NewSceneCode.GDcheckpointObjects3= [];
gdjs.NewSceneCode.GDcheckpoint_95textObjects1= [];
gdjs.NewSceneCode.GDcheckpoint_95textObjects2= [];
gdjs.NewSceneCode.GDcheckpoint_95textObjects3= [];
gdjs.NewSceneCode.GDLeftButtonObjects1= [];
gdjs.NewSceneCode.GDLeftButtonObjects2= [];
gdjs.NewSceneCode.GDLeftButtonObjects3= [];
gdjs.NewSceneCode.GDRightButtonObjects1= [];
gdjs.NewSceneCode.GDRightButtonObjects2= [];
gdjs.NewSceneCode.GDRightButtonObjects3= [];
gdjs.NewSceneCode.GDJumpButtonObjects1= [];
gdjs.NewSceneCode.GDJumpButtonObjects2= [];
gdjs.NewSceneCode.GDJumpButtonObjects3= [];
gdjs.NewSceneCode.GDArrowButtonsBgObjects1= [];
gdjs.NewSceneCode.GDArrowButtonsBgObjects2= [];
gdjs.NewSceneCode.GDArrowButtonsBgObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.NewSceneCode.GDrightObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.NewSceneCode.GDleftObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.NewSceneCode.GDSlimeObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcheckpointObjects1Objects = Hashtable.newFrom({"checkpoint": gdjs.NewSceneCode.GDcheckpointObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcheckpointObjects1Objects = Hashtable.newFrom({"checkpoint": gdjs.NewSceneCode.GDcheckpointObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.NewSceneCode.GDCoinObjects1});gdjs.NewSceneCode.eventsList0x716f64 = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x716f64
gdjs.NewSceneCode.eventsList0x716e04 = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDCoinObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDCoinObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDCoinObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDCoinObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDCoinObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x716e04
gdjs.NewSceneCode.eventsList0x7182e4 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("Running");
}
}}

}


{

/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x7182e4
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.NewSceneCode.GDLeftButtonObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.NewSceneCode.GDRightButtonObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.NewSceneCode.GDJumpButtonObjects1});gdjs.NewSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{


{
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDPlayerObjects1.length !== 0 ? gdjs.NewSceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.NewSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.NewSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
gdjs.NewSceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDrightObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].returnVariable(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeObjects1[k] = gdjs.NewSceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


{

gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDSlimeObjects1[i].getVariableString(gdjs.NewSceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDSlimeObjects1[k] = gdjs.NewSceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDSlimeObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
/* Reuse gdjs.NewSceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointY")));
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDleftObjects1.createFrom(runtimeScene.getObjects("left"));
gdjs.NewSceneCode.GDrightObjects1.createFrom(runtimeScene.getObjects("right"));
{for(var i = 0, len = gdjs.NewSceneCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDleftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDrightObjects1[i].hide();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointY("")));
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDcheckpointObjects1.createFrom(runtimeScene.getObjects("checkpoint"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDcheckpointObjects1 */
gdjs.NewSceneCode.GDcheckpoint_95textObjects1.createFrom(runtimeScene.getObjects("checkpoint_text"));
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.NewSceneCode.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDcheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.NewSceneCode.GDcheckpointObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDcheckpointObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.NewSceneCode.GDcheckpointObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcheckpointObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDcheckpoint_95textObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcheckpoint_95textObjects1[i].setString("Checkpoint");
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDcheckpointObjects1.createFrom(runtimeScene.getObjects("checkpoint"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcheckpointObjects1Objects, true, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDcheckpoint_95textObjects1.createFrom(runtimeScene.getObjects("checkpoint_text"));
{for(var i = 0, len = gdjs.NewSceneCode.GDcheckpoint_95textObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcheckpoint_95textObjects1[i].setString("");
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x716e04(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x7182e4(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.NewSceneCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b6e18


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.NewSceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.NewSceneCode.GDGrassPlatformObjects3.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects3.length = 0;
gdjs.NewSceneCode.GDBushObjects1.length = 0;
gdjs.NewSceneCode.GDBushObjects2.length = 0;
gdjs.NewSceneCode.GDBushObjects3.length = 0;
gdjs.NewSceneCode.GDCloudObjects1.length = 0;
gdjs.NewSceneCode.GDCloudObjects2.length = 0;
gdjs.NewSceneCode.GDCloudObjects3.length = 0;
gdjs.NewSceneCode.GDCoinObjects1.length = 0;
gdjs.NewSceneCode.GDCoinObjects2.length = 0;
gdjs.NewSceneCode.GDCoinObjects3.length = 0;
gdjs.NewSceneCode.GDScoreObjects1.length = 0;
gdjs.NewSceneCode.GDScoreObjects2.length = 0;
gdjs.NewSceneCode.GDScoreObjects3.length = 0;
gdjs.NewSceneCode.GDSlimeObjects1.length = 0;
gdjs.NewSceneCode.GDSlimeObjects2.length = 0;
gdjs.NewSceneCode.GDSlimeObjects3.length = 0;
gdjs.NewSceneCode.GDleftObjects1.length = 0;
gdjs.NewSceneCode.GDleftObjects2.length = 0;
gdjs.NewSceneCode.GDleftObjects3.length = 0;
gdjs.NewSceneCode.GDrightObjects1.length = 0;
gdjs.NewSceneCode.GDrightObjects2.length = 0;
gdjs.NewSceneCode.GDrightObjects3.length = 0;
gdjs.NewSceneCode.GDcheckpointObjects1.length = 0;
gdjs.NewSceneCode.GDcheckpointObjects2.length = 0;
gdjs.NewSceneCode.GDcheckpointObjects3.length = 0;
gdjs.NewSceneCode.GDcheckpoint_95textObjects1.length = 0;
gdjs.NewSceneCode.GDcheckpoint_95textObjects2.length = 0;
gdjs.NewSceneCode.GDcheckpoint_95textObjects3.length = 0;
gdjs.NewSceneCode.GDLeftButtonObjects1.length = 0;
gdjs.NewSceneCode.GDLeftButtonObjects2.length = 0;
gdjs.NewSceneCode.GDLeftButtonObjects3.length = 0;
gdjs.NewSceneCode.GDRightButtonObjects1.length = 0;
gdjs.NewSceneCode.GDRightButtonObjects2.length = 0;
gdjs.NewSceneCode.GDRightButtonObjects3.length = 0;
gdjs.NewSceneCode.GDJumpButtonObjects1.length = 0;
gdjs.NewSceneCode.GDJumpButtonObjects2.length = 0;
gdjs.NewSceneCode.GDJumpButtonObjects3.length = 0;
gdjs.NewSceneCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.NewSceneCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.NewSceneCode.GDArrowButtonsBgObjects3.length = 0;

gdjs.NewSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
