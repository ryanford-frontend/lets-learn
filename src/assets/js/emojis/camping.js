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
				el.appendChild(svg["path"]("M18 25.18C3.438 25.18 0 29.844 0 32s1.791 4 4 4h28c2.209 0 4-1.851 4-4s-3.438-6.82-18-6.82z", {["fill"]: "#78B159",["d"]: "M18 25.18C3.438 25.18 0 29.844 0 32s1.791 4 4 4h28c2.209 0 4-1.851 4-4s-3.438-6.82-18-6.82z",}));el.appendChild(svg["path"]("M28.804 28.15c0 1.531-1.242 2.08-2.773 2.08-1.531 0-2.773-.548-2.773-2.08l.693-6.239c0-1.531.548-1.387 2.08-1.387 1.531 0 2.08-.145 2.08 1.387l.693 6.239z", {["fill"]: "#662113",["d"]: "M28.804 28.15c0 1.531-1.242 2.08-2.773 2.08-1.531 0-2.773-.548-2.773-2.08l.693-6.239c0-1.531.548-1.387 2.08-1.387 1.531 0 2.08-.145 2.08 1.387l.693 6.239z",}));el.appendChild(svg["path"]("M34.868 19.717c-4.59-4.135-6.449-10.056-8.837-10.056s-4.247 5.921-8.836 10.056c-1.929 1.738-1.01 2.743 1.634 2.542 2.357-.179 4.561-.741 7.202-.741s4.846.563 7.202.741c2.644.201 3.563-.805 1.635-2.542z", {["fill"]: "#5C913B",["d"]: "M34.868 19.717c-4.59-4.135-6.449-10.056-8.837-10.056s-4.247 5.921-8.836 10.056c-1.929 1.738-1.01 2.743 1.634 2.542 2.357-.179 4.561-.741 7.202-.741s4.846.563 7.202.741c2.644.201 3.563-.805 1.635-2.542z",}));el.appendChild(svg["path"]("M33.377 18.078c-3.527-3.401-5.509-8.273-7.346-8.273-1.836 0-3.818 4.872-7.345 8.273-2.803 2.703 3.673 3.309 7.345 0 3.671 3.309 10.148 2.703 7.346 0z", {["fill"]: "#3E721D",["d"]: "M33.377 18.078c-3.527-3.401-5.509-8.273-7.346-8.273-1.836 0-3.818 4.872-7.345 8.273-2.803 2.703 3.673 3.309 7.345 0 3.671 3.309 10.148 2.703 7.346 0z",}));el.appendChild(svg["path"]("M33.377 15.323c-3.527-3.178-5.509-7.729-7.346-7.729-1.836 0-3.818 4.551-7.345 7.729-2.803 2.525 3.673 3.091 7.345 0 3.671 3.091 10.148 2.524 7.346 0z", {["fill"]: "#5C913B",["d"]: "M33.377 15.323c-3.527-3.178-5.509-7.729-7.346-7.729-1.836 0-3.818 4.551-7.345 7.729-2.803 2.525 3.673 3.091 7.345 0 3.671 3.091 10.148 2.524 7.346 0z",}));el.appendChild(svg["path"]("M31.766 13.066c-2.753-2.481-4.301-6.034-5.735-6.034-1.433 0-2.981 3.553-5.735 6.034-2.188 1.971 2.867 2.414 5.735 0 2.867 2.413 7.923 1.971 5.735 0z", {["fill"]: "#3E721D",["d"]: "M31.766 13.066c-2.753-2.481-4.301-6.034-5.735-6.034-1.433 0-2.981 3.553-5.735 6.034-2.188 1.971 2.867 2.414 5.735 0 2.867 2.413 7.923 1.971 5.735 0z",}));el.appendChild(svg["path"]("M31.766 11.001c-2.753-2.481-4.301-6.034-5.735-6.034-1.433 0-2.981 3.553-5.735 6.034-2.188 1.971 2.867 2.414 5.735 0 2.867 2.414 7.923 1.972 5.735 0z", {["fill"]: "#5C913B",["d"]: "M31.766 11.001c-2.753-2.481-4.301-6.034-5.735-6.034-1.433 0-2.981 3.553-5.735 6.034-2.188 1.971 2.867 2.414 5.735 0 2.867 2.414 7.923 1.972 5.735 0z",}));el.appendChild(svg["path"]("M30.659 9.168c-2.222-2.002-3.471-4.869-4.628-4.869s-2.406 2.867-4.628 4.869c-1.766 1.591 2.314 1.948 4.628 0 2.314 1.948 6.395 1.591 4.628 0z", {["fill"]: "#3E721D",["d"]: "M30.659 9.168c-2.222-2.002-3.471-4.869-4.628-4.869s-2.406 2.867-4.628 4.869c-1.766 1.591 2.314 1.948 4.628 0 2.314 1.948 6.395 1.591 4.628 0z",}));el.appendChild(svg["path"]("M30.659 7.614c-2.222-2.002-3.471-4.869-4.628-4.869s-2.406 2.867-4.628 4.869c-1.766 1.591 2.314 1.948 4.628 0 2.314 1.948 6.395 1.591 4.628 0z", {["fill"]: "#5C913B",["d"]: "M30.659 7.614c-2.222-2.002-3.471-4.869-4.628-4.869s-2.406 2.867-4.628 4.869c-1.766 1.591 2.314 1.948 4.628 0 2.314 1.948 6.395 1.591 4.628 0z",}));el.appendChild(svg["path"]("M29.553 5.326c-1.69-1.523-2.641-3.705-3.522-3.705-.88 0-1.831 2.182-3.522 3.705-1.344 1.211 1.761 1.482 3.522 0 1.761 1.483 4.866 1.211 3.522 0z", {["fill"]: "#3E721D",["d"]: "M29.553 5.326c-1.69-1.523-2.641-3.705-3.522-3.705-.88 0-1.831 2.182-3.522 3.705-1.344 1.211 1.761 1.482 3.522 0 1.761 1.483 4.866 1.211 3.522 0z",}));el.appendChild(svg["path"]("M29.553 4.29C27.863 2.767 26.912.585 26.031.585c-.88 0-1.831 2.182-3.522 3.705-1.344 1.211 1.761 1.482 3.522 0 1.761 1.482 4.866 1.211 3.522 0z", {["fill"]: "#5C913B",["d"]: "M29.553 4.29C27.863 2.767 26.912.585 26.031.585c-.88 0-1.831 2.182-3.522 3.705-1.344 1.211 1.761 1.482 3.522 0 1.761 1.482 4.866 1.211 3.522 0z",}));el.appendChild(svg["path"]("M15.101 33c-.424 0-.802-.267-.944-.666L9.145 18.301c-.11-.307-.063-.628.125-.896.188-.265.494-.405.82-.405h11.759c.401 0 .764.22.922.589l6.014 14.023c.133.31.101.661-.084.942-.188.282-.502.446-.839.446H15.101z", {["fill"]: "#F4900C",["d"]: "M15.101 33c-.424 0-.802-.267-.944-.666L9.145 18.301c-.11-.307-.063-.628.125-.896.188-.265.494-.405.82-.405h11.759c.401 0 .764.22.922.589l6.014 14.023c.133.31.101.661-.084.942-.188.282-.502.446-.839.446H15.101z",}));el.appendChild(svg["path"]("M4.075 33c-.337 0-.652-.17-.837-.45-.185-.282-.216-.638-.084-.948L9.172 17.56c.157-.368.521-.607.921-.607.401 0 .765.24.922.607l6.018 14.041c.133.311.1.666-.085.948-.185.281-.5.451-.837.451H4.075z", {["fill"]: "#FFCC4D",["d"]: "M4.075 33c-.337 0-.652-.17-.837-.45-.185-.282-.216-.638-.084-.948L9.172 17.56c.157-.368.521-.607.921-.607.401 0 .765.24.922.607l6.018 14.041c.133.311.1.666-.085.948-.185.281-.5.451-.837.451H4.075z",}));el.appendChild(svg["path"]("M10.09 19.436L8.084 33h4.01z", {["fill"]: "#292F33",["d"]: "M10.09 19.436L8.084 33h4.01z",}));el.appendChild(svg["path"]("M14.127 31.887L14.575 33h-2.481zm-8.075 0L5.604 33h2.48z", {["fill"]: "#FFAC33",["d"]: "M14.127 31.887L14.575 33h-2.481zm-8.075 0L5.604 33h2.48z",}));el.appendChild(svg["path"]("M12.094 33s1.823-.465 2.714-1.288L10.09 19.436 12.094 33zm-4.01 0s-1.823-.465-2.714-1.288l4.719-12.277L8.084 33z", {["fill"]: "#FFE8B6",["d"]: "M12.094 33s1.823-.465 2.714-1.288L10.09 19.436 12.094 33zm-4.01 0s-1.823-.465-2.714-1.288l4.719-12.277L8.084 33z",}));el.appendChild(svg["path"]("M13.625 5.625c-.018 0-.034.006-.052.006.034-.164.052-.333.052-.507 0-1.381-1.119-2.5-2.5-2.5-.891 0-1.667.469-2.11 1.171-.277-.106-.575-.17-.89-.17-1.275 0-2.315.957-2.469 2.19-.282-.113-.583-.19-.906-.19-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5h8.875c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z", {["fill"]: "#E1E8ED",["d"]: "M13.625 5.625c-.018 0-.034.006-.052.006.034-.164.052-.333.052-.507 0-1.381-1.119-2.5-2.5-2.5-.891 0-1.667.469-2.11 1.171-.277-.106-.575-.17-.89-.17-1.275 0-2.315.957-2.469 2.19-.282-.113-.583-.19-.906-.19-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5h8.875c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};