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
				el.appendChild(svg["path"]("M31.42 31.471c-3.515 3.515-9.213 3.515-12.728 0L4.55 17.328c-3.515-3.515-3.515-9.213 0-12.728 3.515-3.515 9.213-3.515 12.728 0L31.42 18.743c3.515 3.514 3.515 9.213 0 12.728z", {["fill"]: "#D99E82",["d"]: "M31.42 31.471c-3.515 3.515-9.213 3.515-12.728 0L4.55 17.328c-3.515-3.515-3.515-9.213 0-12.728 3.515-3.515 9.213-3.515 12.728 0L31.42 18.743c3.515 3.514 3.515 9.213 0 12.728z",}));el.appendChild(svg["path"]("M29.335 20.9c3.515 3.515 4.609 8.119 2.475 10.253-2.135 2.134-6.739 1.039-10.253-2.475L7.414 14.536c-3.515-3.515-4.609-8.12-2.475-10.253 2.134-2.134 6.738-1.04 10.253 2.475L29.335 20.9z", {["fill"]: "#F7BBA6",["d"]: "M29.335 20.9c3.515 3.515 4.609 8.119 2.475 10.253-2.135 2.134-6.739 1.039-10.253-2.475L7.414 14.536c-3.515-3.515-4.609-8.12-2.475-10.253 2.134-2.134 6.738-1.04 10.253 2.475L29.335 20.9z",}));el.appendChild(svg["path"]("M33.167 28.974c1.415 1.415 1.611 3.51.44 4.682-1.172 1.171-3.267.975-4.682-.44L2.732 7.025c-1.414-1.414-1.61-3.51-.439-4.682 1.171-1.171 3.268-.975 4.682.439l26.192 26.192z", {["fill"]: "#DD2E44",["d"]: "M33.167 28.974c1.415 1.415 1.611 3.51.44 4.682-1.172 1.171-3.267.975-4.682-.44L2.732 7.025c-1.414-1.414-1.61-3.51-.439-4.682 1.171-1.171 3.268-.975 4.682.439l26.192 26.192z",}));el.appendChild(svg["path"]("M32.127 31.764c-.256 0-.512-.098-.707-.293-.916-.916-1.598-1.07-2.462-1.266-.988-.224-2.109-.478-3.435-1.803s-1.578-2.446-1.802-3.435c-.195-.863-.35-1.546-1.266-2.462-.915-.915-1.597-1.069-2.46-1.264-.989-.224-2.11-.477-3.434-1.801-1.323-1.324-1.576-2.444-1.799-3.432-.194-.862-.348-1.543-1.262-2.458-.914-.914-1.595-1.067-2.457-1.262-.988-.223-2.108-.476-3.432-1.799-1.322-1.322-1.575-2.442-1.798-3.43-.195-.863-.348-1.544-1.263-2.458-.391-.39-.391-1.023 0-1.414s1.023-.391 1.414 0c1.324 1.323 1.577 2.443 1.8 3.432.195.862.348 1.543 1.263 2.458.914.914 1.595 1.067 2.457 1.262.988.223 2.108.476 3.432 1.799 1.324 1.324 1.576 2.444 1.799 3.432.194.862.348 1.543 1.262 2.458.916.916 1.597 1.07 2.46 1.264.988.224 2.109.477 3.434 1.801 1.325 1.325 1.578 2.446 1.802 3.435.195.863.35 1.546 1.266 2.462s1.599 1.07 2.462 1.266c.989.224 2.11.478 3.435 1.803.391.391.391 1.023 0 1.414-.197.193-.453.291-.709.291z", {["fill"]: "#FFCC4D",["d"]: "M32.127 31.764c-.256 0-.512-.098-.707-.293-.916-.916-1.598-1.07-2.462-1.266-.988-.224-2.109-.478-3.435-1.803s-1.578-2.446-1.802-3.435c-.195-.863-.35-1.546-1.266-2.462-.915-.915-1.597-1.069-2.46-1.264-.989-.224-2.11-.477-3.434-1.801-1.323-1.324-1.576-2.444-1.799-3.432-.194-.862-.348-1.543-1.262-2.458-.914-.914-1.595-1.067-2.457-1.262-.988-.223-2.108-.476-3.432-1.799-1.322-1.322-1.575-2.442-1.798-3.43-.195-.863-.348-1.544-1.263-2.458-.391-.39-.391-1.023 0-1.414s1.023-.391 1.414 0c1.324 1.323 1.577 2.443 1.8 3.432.195.862.348 1.543 1.263 2.458.914.914 1.595 1.067 2.457 1.262.988.223 2.108.476 3.432 1.799 1.324 1.324 1.576 2.444 1.799 3.432.194.862.348 1.543 1.262 2.458.916.916 1.597 1.07 2.46 1.264.988.224 2.109.477 3.434 1.801 1.325 1.325 1.578 2.446 1.802 3.435.195.863.35 1.546 1.266 2.462s1.599 1.07 2.462 1.266c.989.224 2.11.478 3.435 1.803.391.391.391 1.023 0 1.414-.197.193-.453.291-.709.291z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};