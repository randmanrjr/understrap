const { promises: fs } = require("fs")
const path = require("path")

async function copyFile(src, dest) {
	let srcInfo = path.parse(src);
	let destInfo = path.parse(dest);
	await fs.mkdir(destInfo.dir, { recursive: true });
	await fs.copyFile(src, dest);
}

async function copyDir(src, dest) {
	await fs.mkdir(dest, { recursive: true });
	let entries = await fs.readdir(src, { withFileTypes: true });

	for (let entry of entries) {
		let srcPath = path.join(src, entry.name);
		let destPath = path.join(dest, entry.name);

		entry.isDirectory() ?
			await copyDir(srcPath, destPath) :
			await fs.copyFile(srcPath, destPath);
	}
}

// Copy all Mayo Functions files
copyDir('./node_modules/mayo-functions', './inc/mayo-functions');

// Copy social colors
copyDir('./node_modules/randmans-social-colors', './src/sass/theme/randmans-social-colors');
copyDir('./node_modules/randmans-social-colors', './src/sass/theme/randmans-social-colors');

// Copy Slick Carousel Assets
copyDir('./node_modules/slick-carousel/slick/fonts', './css/fonts');
copyFile('./node_modules/slick-carousel/slick/ajax-loader.gif', './css/ajax-loader.gif');
copyFile('./node_modules/slick-carousel/slick/slick.scss', './src/sass/theme/slick/slick.scss');
copyFile('./node_modules/slick-carousel/slick/slick-theme.scss', './src/sass/theme/slick/slick-theme.scss');
copyFile('./node_modules/slick-carousel/slick/slick.js', './src/js/slick.js');

