/* ----------------
  $.completeness([
    { 
      name : 'Skills', 
      obj : $("#skills-list li"), 
      assertion : ($("#skills-list li").length == 5)
    },
    { 
      name : 'Profile Photo', 
      obj : $("#profile-photo"), 
      assertion : ($("#profile-photo").length == 1)
    },
  ]);
*/

;(function($){
  $.completeness = function(criteria) {
    
    var elements = criteria;
    var passing_elements = [];
    var failing_elements = [];
    
    var process = function() {
      failing_elements = [];
      passing_elements = [];
      $.each(criteria, function() {      
        if(this.assertion) {
          passing_elements.push(this);
          this['status'] = 'passing';
        } else {
          failing_elements.push(this);
          this['status'] = 'failing';
        }
      });
      return true;
    }();
          
    return {
      criteria : criteria,
      passing_elements : function() {
        return passing_elements;
      },
      failing_elements : function() {
        return failing_elements;
      },
      percentage : function() {        
        return (passing_elements.length/elements.length)*100;
      },
      reload : function() {
        process();
      }      
    }
  }
})(jQuery);