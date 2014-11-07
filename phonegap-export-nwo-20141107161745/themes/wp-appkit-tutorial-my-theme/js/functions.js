define(['jquery', 'core/theme-app', 'theme/js/bootstrap.min'],function($, App){
    
	//See http://uncategorized-creations.com/app-kit/doc/#237-functions-js to 
	//learn more about what you can do in this functions.js file.
	
	/**
	 * Close menu when we click a link inside it.
	 * The menu can be dynamically refreshed, so we use "on" on 
	 * parent div (which is always here):
	 */
	$( '#navbar-collapse' ).on( 'click', 'a', function() {
		closeMenu();
	} );
	
	/**
	 * Scroll to top each time a new screen is showed in the app.
	 * 'screen:showed' is an AppKit event that allows to intercept 
	 * change of screen in the app (list to post detail for example).
	 */
	App.on( 'screen:showed', function( current_screen, view ) {
		scrollTop();
	} );
	
	/**
	 * Close the bootstrap navbar manually
	 */
	function closeMenu() {
		var navbar_toggle_button = $( ".navbar-toggle" ).eq( 0 );
		if ( !navbar_toggle_button.hasClass( 'collapsed' ) ) {
			navbar_toggle_button.click();
		}
	}
	
	/**
	 * Get back to the top of the screen
	 */
	function scrollTop() {
		window.scrollTo( 0, 0 );
	}
	
});