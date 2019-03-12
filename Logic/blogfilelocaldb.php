<?php
/**
 * Created by PhpStorm.
 * User: Development
 * Date: 7-2-2019
 * Time: 13:48
 */

/**
 * @return array
 */
function getBlogFromDB (){
	// Blog information from a local database

	$blogTitle1 = "Blog Post 1";
	$blogTitle2 = "Blog Post 2";
	$blogTitle3 = "Blog Post 3";

	$blogText1 = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ";
	$blogText2 = "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. ";
	$blogText3 = "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, ";

	// Create an associative array

	$currentBlogPosts = array($blogTitle1 => $blogText1 , $blogTitle2 => $blogText2 , $blogTitle3 => $blogText3);

	return $currentBlogPosts;
};