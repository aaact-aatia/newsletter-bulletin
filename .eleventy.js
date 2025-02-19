const mainConfig = require("./main-site/eleventy.config.js"); // Import the main site config

module.exports = function (eleventyConfig) {
	// Load everything from the main site's config
	const config = mainConfig(eleventyConfig);

	eleventyConfig.addPassthroughCopy({
		"./public": "/",
	});

	// Override the directories specific to this project
	return {
		...config, // Spread operator to merge main site's config
		dir: {
			input: "content",
			data: "../main-site/_data",
			includes: "../main-site/_includes",
			layouts: "../main-site/_includes/layouts",
			output: "_site"
		}
	};
};
