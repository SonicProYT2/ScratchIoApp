// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.Editor', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
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
                .setHost(host,"xui_ui_button25")
                .setDirtyMark(false)
                .setLeft("144em")
                .setTop("0em")
                .setWidth("8.761904761904763em")
                .setHeight("2.895238095238095em")
                .setCaption("Export App")
                .setImageClass("fa fa-lg fa-download")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button32")
                .setDirtyMark(false)
                .setLeft("144em")
                .setTop("3.0476190476190474em")
                .setWidth("8.457142857142857em")
                .setHeight("2.8190476190476192em")
                .setCaption("Paste")
                .setImageClass("fa fa-lg fa-paste")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button33")
                .setDirtyMark(false)
                .setLeft("144em")
                .setTop("9.142857142857142em")
                .setWidth("8.457142857142857em")
                .setHeight("2.8190476190476192em")
                .setCaption("Upload File")
                .setImageClass("fa fa-lg fa-upload")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button34")
                .setDirtyMark(false)
                .setLeft("144em")
                .setTop("6.095238095238095em")
                .setWidth("8.457142857142857em")
                .setHeight("2.8190476190476192em")
                .setCaption("Cut/Copy")
                .setImageClass("fa fa-lg fa-cut")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button35")
                .setDirtyMark(false)
                .setLeft("144em")
                .setTop("12.19047619047619em")
                .setWidth("8.761904761904763em")
                .setHeight("2.895238095238095em")
                .setCaption("Edit Code")
                .setImageClass("fa fa-lg fa-edit")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button36")
                .setDirtyMark(false)
                .setLeft("133.33333333333334em")
                .setTop("0em")
                .setWidth("10.285714285714286em")
                .setHeight("2.895238095238095em")
                .setCaption("Edit Costumes")
                .setImageClass("fa fa-lg fa-paint-brush")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button37")
                .setDirtyMark(false)
                .setLeft("147.8095238095238em")
                .setTop("41.142857142857146em")
                .setWidth("3.4285714285714284em")
                .setHeight("3.657142857142857em")
                .setCaption("")
                .setImageClass("fa fa-lg fa-plus")
            );
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"xui_ui_richeditor2")
                .setDirtyMark(false)
                .setLeft("106.66666666666667em")
                .setTop("16em")
                .setHeight("26em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("RichEditor")
                .setLabelHAlign("left")
            );
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"xui_ui_richeditor3")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("60.95238095238095em")
                .setHeight("31.314285714285713em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Rich Text Editor")
                .setLabelHAlign("left")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button38")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("31.238095238095237em")
                .setCaption("Webcam")
                .setImageClass("fa fa-lg fa-camera")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button39")
                .setDirtyMark(false)
                .setLeft("6.857142857142857em")
                .setTop("31.238095238095237em")
                .setCaption("Painting Tool")
                .setImageClass("fa fa-lg fa-paint-brush")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button40")
                .setDirtyMark(false)
                .setLeft("15.238095238095237em")
                .setTop("31.238095238095237em")
                .setCaption("3D Model Maker")
                .setImageClass("fa fa-lg fa-cubes")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button41")
                .setDirtyMark(false)
                .setLeft("22.095238095238095em")
                .setTop("33.523809523809526em")
                .setCaption("Add User")
                .setImageClass("fa fa-lg fa-user-plus")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button42")
                .setDirtyMark(false)
                .setLeft("16em")
                .setTop("33.523809523809526em")
                .setCaption("Forums")
                .setImageClass("fa fa-lg fa-reply")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button43")
                .setDirtyMark(false)
                .setLeft("8.380952380952381em")
                .setTop("33.523809523809526em")
                .setCaption("Coding App")
                .setImageClass("fa fa-lg fa-file-code-o")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button44")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("33.523809523809526em")
                .setCaption("Movie Maker")
                .setImageClass("fa fa-lg fa-film")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        functions:{
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});