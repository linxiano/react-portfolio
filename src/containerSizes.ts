// Container dimensions used by ContentBox for the grow/shrink animation.
// Replaces the former SCSS-module :export from variables.module.scss.
export const containerSizes = {
	containerWidth: '610px',
	// Sized to fit the shared skill list without the social bar scrolling out
	// of view; the card body still scrolls if content grows past this.
	containerHeight: '565px',
	containerWidthMobile: '100vw',
	containerHeightMobile: '85vh',
	containerWidthGrow: '75vw',
	containerHeightGrow: '80vh',
	containerWidthGrowMobile: '100vw',
	containerHeightGrowMobile: '85vh',
};
