document.getElementById( 'outputL' ).style.visibility = 'hidden';

// The converter code non DRYED, so you can see the difference

document.getElementById( 'kgsInput' ).addEventListener( 'input', function ( e ) {
	let kgs = e.target.value;

	document.getElementById( 'outputL' ).style.visibility = 'visible';
	document.getElementById( 'GramsOutput' ).innerHTML = (kgs * 1000) + " Gram";
	document.getElementById( 'PoundsOutput' ).innerHTML = (kgs * 2.20462262).toFixed( 2 ) + " Pounds";
	document.getElementById( 'ozOutput' ).innerHTML = (kgs * 35.2739619).toFixed( 2 ) + " Ounces";
} );

document.getElementById( 'outputR' ).style.visibility = 'hidden';

// The converter code DRYED, it's a bit longer due to the array's but the main logic is way shorter.

document.getElementById( 'inputMeter' ).addEventListener( 'input', function ( e ) {
	let mtr = e.target.value;

	document.getElementById( 'outputR' ).style.visibility = 'visible';

	let elementID = [
		'outputInch',
		'outputFoot',
		'outputYard',
		'outputMile'
	];

	let relativeToMeter = [
		39.3700787,
		3.2808399,
		1.0936133,
		0.000621371192
	];

	for(let i = 0; i < elementID.length; i++){
		document.getElementById( elementID[i] ).innerHTML = (mtr * relativeToMeter[i]).toFixed( 2 ) + " " + elementID[i].substring(6, 10);
	}
} );
