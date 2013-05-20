directives.directive('uiTinymce', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            
            element.tinymce({
                // Location of TinyMCE script
                script_url: 'http://resources.holycrap.ws/jscripts/tiny_mce/tiny_mce.js',

                // General options
                theme: "simple",

                // Change from local directive scope -> "parent" scope
                // Update Textarea and Trigger change event
                // you can also use handle_event_callback which fires more often
                onchange_callback: function(e) {

                    if (this.isDirty()) {
                        this.save();

                        // tinymce inserts the value back to the textarea element, so we get the val from element (work's only for textareas)
                        ngModel.$setViewValue(element.val());
                        scope.$apply();
                        
                        return true;
                    }
                }
            });

        }
    };
});