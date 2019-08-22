// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setDirtyMark(false)
                .setLeft("5em")
                .setTop("5em")
                .setCaption("Test")
                .onClick("_xui_ui_button11_onclick")
                .onClickDrop("_xui_ui_button11_onclickdrop")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input23")
                .setDirtyMark(false)
                .setLeft("5em")
                .setTop("9.166666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label19")
                .setLeft("9.166666666666666em")
                .setTop("11.666666666666666em")
                .setWidth("13.25em")
                .setCaption("Label")
            );
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("11.666666666666666em")
                .setTop("4.166666666666667em")
                .setCaption("Native Button")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button17")
                .setDirtyMark(false)
                .setLeft("5.833333333333333em")
                .setTop("15.833333333333334em")
                .setCaption("Dropable Button")
                .setType("drop")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button11_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();

            ns.xui_ui_label19.setCaption("Das ist ein Test!");
            ns.xui_ui_input23.setValue("Das ist ein Test!");
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});