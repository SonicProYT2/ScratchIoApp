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
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel5")
                .setDock("none")
                .setLeft("3.0476190476190474em")
                .setTop("3.0476190476190474em")
                .setWidth("51.12380952380953em")
                .setHeight("26.742857142857144em")
                .setZIndex(0)
                .setCaption("Login to Scratch.io")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image9")
                .setLeft("2.5904761904761906em")
                .setTop("4.876190476190477em")
                .setWidth("14.780952380952382em")
                .setHeight("10.209523809523809em")
                .setZIndex(1002)
                .setSrc("{/}img/scratch cat icon scratch cat.png")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput17")
                .setDirtyMark(false)
                .setLeft("20.114285714285714em")
                .setTop("13.257142857142858em")
                .setWidth("24.076190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Birthdate")
                .setType("date")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("20.114285714285714em")
                .setTop("10.971428571428572em")
                .setWidth("24.076190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Password")
                .setType("password")
                .setValue("pwd")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setDirtyMark(false)
                .setLeft("20.114285714285714em")
                .setTop("8.685714285714285em")
                .setWidth("24.076190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setDirtyMark(false)
                .setLeft("31.61904761904762em")
                .setTop("17.142857142857142em")
                .setWidth("7.923809523809524em")
                .setHeight("2.4380952380952383em")
                .setCaption("Login/Signup")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image13")
                .setLeft("25.447619047619046em")
                .setTop("2.5904761904761906em")
                .setWidth("19.2em")
                .setHeight("4.876190476190477em")
                .setSrc("{/}img/costume2 (14).png")
                .onDblclick("_xui_ui_image13_ondblclick")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setDirtyMark(false)
                .setLeft("51.04761904761905em")
                .setTop("3.0476190476190474em")
                .setWidth("2.9714285714285715em")
                .setHeight("2.8190476190476192em")
                .setCaption("X")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "you can't close this webpage!",
                            "this is a test website because you can't close that."
                        ],
                        "method":"pop",
                        "event":1
                    }
                ])
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
         * Fired when image is dblclicked
         * @method onDblclick [xui.UI.Image event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
        */
        _xui_ui_image13_ondblclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
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