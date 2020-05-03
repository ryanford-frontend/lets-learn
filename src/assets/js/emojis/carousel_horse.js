import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M24.357 16.337s2.248-3.959 4.805-4.169c2.557-.21 3.929.934 4.144 3.432.287 3.334-.878 3.802-.033 7.53 0 0-3.546-2.414-2.421-6.07 1.172-3.806-4.81-3.095-3.835.316l-2.66-1.039z", {["fill"]: "#DD2E44",["d"]: "M24.357 16.337s2.248-3.959 4.805-4.169c2.557-.21 3.929.934 4.144 3.432.287 3.334-.878 3.802-.033 7.53 0 0-3.546-2.414-2.421-6.07 1.172-3.806-4.81-3.095-3.835.316l-2.66-1.039z",}));el.appendChild(svg["path"]("M14.31 20.375c-.553 0-1 .448-1 1v13.563c0 .552.447 1 1 1s1-.448 1-1V21.375c0-.552-.448-1-1-1z", {["fill"]: "#FFCC4D",["d"]: "M14.31 20.375c-.553 0-1 .448-1 1v13.563c0 .552.447 1 1 1s1-.448 1-1V21.375c0-.552-.448-1-1-1z",}));el.appendChild(svg["path"]("M15.31 25.77l-2 1.047v2.257l2-1.047zm-2 8.054l2-1.047V30.52l-2 1.047z", {["fill"]: "#F4900C",["d"]: "M15.31 25.77l-2 1.047v2.257l2-1.047zm-2 8.054l2-1.047V30.52l-2 1.047z",}));el.appendChild(svg["path"]("M3.912 21.935c-1.181-.117-1.918 1.621-1.918 1.621.114.814.447 2.255.597 2.778.327 1.141 2.121 3.095 3.262 2.768 1.141-.327.814-1.468.487-2.608-.327-1.141-2.428.622-1.794-1.955.149-.606.865-.756 1.483-.695 2.362.234 2.881-.223 3.788-1.325 1.064-1.296-4.724-.467-5.905-.584zm25.142 6.7c0 2.373 1.187 3.56 3.56 3.56s1.187 0 0-2.373-3.56-3.56-3.56-3.56v2.373z", {["fill"]: "#8899A6",["d"]: "M3.912 21.935c-1.181-.117-1.918 1.621-1.918 1.621.114.814.447 2.255.597 2.778.327 1.141 2.121 3.095 3.262 2.768 1.141-.327.814-1.468.487-2.608-.327-1.141-2.428.622-1.794-1.955.149-.606.865-.756 1.483-.695 2.362.234 2.881-.223 3.788-1.325 1.064-1.296-4.724-.467-5.905-.584zm25.142 6.7c0 2.373 1.187 3.56 3.56 3.56s1.187 0 0-2.373-3.56-3.56-3.56-3.56v2.373z",}));el.appendChild(svg["path"]("M34.987 31.008c-1.187-1.187-2.373 0-2.373-2.373s-1.187-3.56-2.373-3.56-1.187-4.746-1.187-5.933-2.373-5.933-5.933-5.933c-3.56 0-5.933 1.187-8.306 1.187-2.373 0-3.56 0-4.746-4.746-.91-3.64-4.746-4.746-8.306-3.56 0 0-2.582-.995-1.395.192 1.187 1.187-.18.995-.18 3.368 0 .275.066.515.174.73C.354 11.489.343 13.521.369 14c.036.667.294.883 1.131 1.208 1.125.438 1.782-.319 1.854-.708.146-.792.021-1.656.021-1.656s1.167-.469 1.896-1.135c.098.081.625 1.146.052 2.688-.413 1.112-1.187 2.373 1.187 5.933 0 0-3.56 0-4.746 1.187C.577 22.704.288 25.077.312 26.263c.033 1.648 1.452 3.56 2.639 3.56s1.187-1.187 1.187-2.373c0-1.187-2.373 0-1.187-2.373 1.187-2.373 1.187-1.187 2.373-1.187 1.187 0 3.56-1.187 4.746-1.187s3.56 1.187 5.933 1.187c2.373 0 4.746-2.373 7.119 0 2.373 2.373 5.933 2.373 7.119 3.56 1.187 1.187 1.187 2.373 1.187 3.56 0 1.187 2.373 2.373 3.56 2.373s1.186-1.188-.001-2.375z", {["fill"]: "#CCD6DD",["d"]: "M34.987 31.008c-1.187-1.187-2.373 0-2.373-2.373s-1.187-3.56-2.373-3.56-1.187-4.746-1.187-5.933-2.373-5.933-5.933-5.933c-3.56 0-5.933 1.187-8.306 1.187-2.373 0-3.56 0-4.746-4.746-.91-3.64-4.746-4.746-8.306-3.56 0 0-2.582-.995-1.395.192 1.187 1.187-.18.995-.18 3.368 0 .275.066.515.174.73C.354 11.489.343 13.521.369 14c.036.667.294.883 1.131 1.208 1.125.438 1.782-.319 1.854-.708.146-.792.021-1.656.021-1.656s1.167-.469 1.896-1.135c.098.081.625 1.146.052 2.688-.413 1.112-1.187 2.373 1.187 5.933 0 0-3.56 0-4.746 1.187C.577 22.704.288 25.077.312 26.263c.033 1.648 1.452 3.56 2.639 3.56s1.187-1.187 1.187-2.373c0-1.187-2.373 0-1.187-2.373 1.187-2.373 1.187-1.187 2.373-1.187 1.187 0 3.56-1.187 4.746-1.187s3.56 1.187 5.933 1.187c2.373 0 4.746-2.373 7.119 0 2.373 2.373 5.933 2.373 7.119 3.56 1.187 1.187 1.187 2.373 1.187 3.56 0 1.187 2.373 2.373 3.56 2.373s1.186-1.188-.001-2.375z",}));el.appendChild(svg["path"]("M10.712 11.761c1.006 2.629 2.154 2.635 4.103 2.635 2 0 4.008-.835 6.718-1.101.143.36.276.728.401 1.101 1.187 3.56 0 5.933-5.933 5.933-3.277 0-5.933-2.656-5.933-5.933.001-.951.246-1.838.644-2.635z", {["fill"]: "#3B94D9",["d"]: "M10.712 11.761c1.006 2.629 2.154 2.635 4.103 2.635 2 0 4.008-.835 6.718-1.101.143.36.276.728.401 1.101 1.187 3.56 0 5.933-5.933 5.933-3.277 0-5.933-2.656-5.933-5.933.001-.951.246-1.838.644-2.635z",}));el.appendChild(svg["path"]("M5.629 19.705c.225.026.459-.013.674-.124.17-.087 4.187-2.185 5.919-5.914.276-.594-1.171-1.719-1.446-1.629-.301.099-.56.318-.704.628-1.385 2.98-4.821 4.786-4.854 4.804-.581.301-.81 1.017-.509 1.598.187.367.539.594.92.637z", {["fill"]: "#F4900C",["d"]: "M5.629 19.705c.225.026.459-.013.674-.124.17-.087 4.187-2.185 5.919-5.914.276-.594-1.171-1.719-1.446-1.629-.301.099-.56.318-.704.628-1.385 2.98-4.821 4.786-4.854 4.804-.581.301-.81 1.017-.509 1.598.187.367.539.594.92.637z",}));el.appendChild(svg["ellipse"](14.31, 15.245, 2.91, 2.326, {["rx"]: "1.455",["cy"]: "15.245",["ry"]: "1.163",["fill"]: "#1C6399",["cx"]: "14.31",}));el.appendChild(svg["path"]("M14.31.25c-.553 0-1 .448-1 1v13.573l.005-.001-.003.001c.006.547.449.989.998.989.553 0 1-.448 1-1V1.25c0-.552-.448-1-1-1z", {["fill"]: "#FFCC4D",["d"]: "M14.31.25c-.553 0-1 .448-1 1v13.573l.005-.001-.003.001c.006.547.449.989.998.989.553 0 1-.448 1-1V1.25c0-.552-.448-1-1-1z",}));el.appendChild(svg["path"]("M15.31 2.02l-2 1.047v2.257l2-1.047zm0 4.75l-2 1.047v2.257l2-1.047zm-2 8.043l.01.006 1.99-1.041V11.52l-2 1.047v2.246z", {["fill"]: "#F4900C",["d"]: "M15.31 2.02l-2 1.047v2.257l2-1.047zm0 4.75l-2 1.047v2.257l2-1.047zm-2 8.043l.01.006 1.99-1.041V11.52l-2 1.047v2.246z",}));el.appendChild(svg["path"]("M3.274 13.255c-.091 0-.182-.025-.262-.074-1.136-.698-2.341-.72-2.353-.72-.276-.003-.498-.229-.496-.504.002-.275.225-.496.5-.496.057.011 1.129.003 2.35.584.287-.838.765-2.666.466-4.922-.036-.274.156-.525.43-.562.276-.033.525.156.562.43.452 3.409-.695 5.875-.744 5.978-.061.128-.173.225-.31.265-.047.014-.095.021-.143.021z", {["fill"]: "#1C6399",["d"]: "M3.274 13.255c-.091 0-.182-.025-.262-.074-1.136-.698-2.341-.72-2.353-.72-.276-.003-.498-.229-.496-.504.002-.275.225-.496.5-.496.057.011 1.129.003 2.35.584.287-.838.765-2.666.466-4.922-.036-.274.156-.525.43-.562.276-.033.525.156.562.43.452 3.409-.695 5.875-.744 5.978-.061.128-.173.225-.31.265-.047.014-.095.021-.143.021z",}));el.appendChild(svg["ellipse"](1.846, 8.862, 1.11, 0.848, {["rx"]: ".555",["fill"]: "#292F33",["cy"]: "8.862",["ry"]: ".424",["cx"]: "1.846",["transform"]: "rotate(-56.453 1.847 8.862)",}));el.appendChild(svg["path"]("M12.442 13.21c-2.373-2.373-1.006-5.256-3.379-7.629-1.876-1.876-4.927-1.863-7.3.51 0 0 1.121 1.086 4.081 1.378 1.43.141 2.649 1.693 3.337 2.782 2.21 4.311 5.056 4.754 3.261 2.959z", {["fill"]: "#DD2E44",["d"]: "M12.442 13.21c-2.373-2.373-1.006-5.256-3.379-7.629-1.876-1.876-4.927-1.863-7.3.51 0 0 1.121 1.086 4.081 1.378 1.43.141 2.649 1.693 3.337 2.782 2.21 4.311 5.056 4.754 3.261 2.959z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};