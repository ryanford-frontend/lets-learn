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
				el.appendChild(svg["path"]("M12.154 19.416l.802.598L3.988 32.04l-.802-.598z", {["fill"]: "#CCD6DD",["d"]: "M12.154 19.416l.802.598L3.988 32.04l-.802-.598z",}));el.appendChild(svg["path"]("M3.186 31.444L1.093 34.25c-.164.22-.119.535.102.7s.535.119.7-.102l2.092-2.806-.801-.598z", {["fill"]: "#DD2E44",["d"]: "M3.186 31.444L1.093 34.25c-.164.22-.119.535.102.7s.535.119.7-.102l2.092-2.806-.801-.598z",}));el.appendChild(svg["path"]("M11.359 21.319c-.22-.164-.266-.479-.102-.7l1.793-2.405c.164-.22.479-.266.7-.102.22.164.266.479.102.7l-1.793 2.405c-.164.221-.479.267-.7.102z", {["fill"]: "#292F33",["d"]: "M11.359 21.319c-.22-.164-.266-.479-.102-.7l1.793-2.405c.164-.22.479-.266.7-.102.22.164.266.479.102.7l-1.793 2.405c-.164.221-.479.267-.7.102z",}));el.appendChild(svg["path"]("M11.76 21.618l-.802-.598c-.22-.164-.266-.479-.102-.7.164-.22.479-.266.7-.102l.802.598c.22.164.266.479.102.7-.164.221-.479.267-.7.102z", {["fill"]: "#292F33",["d"]: "M11.76 21.618l-.802-.598c-.22-.164-.266-.479-.102-.7.164-.22.479-.266.7-.102l.802.598c.22.164.266.479.102.7-.164.221-.479.267-.7.102z",}));el.appendChild(svg["path"]("M.598 35.751c-.22-.164-.266-.479-.102-.7.164-.22.479-.266.7-.102.22.164.266.479.102.7-.165.22-.48.266-.7.102z", {["fill"]: "#99AAB5",["d"]: "M.598 35.751c-.22-.164-.266-.479-.102-.7.164-.22.479-.266.7-.102.22.164.266.479.102.7-.165.22-.48.266-.7.102z",}));el.appendChild(svg["path"]("M20.436 35.056s.061-.144.061-.448c0-.303-.156-.869-.199-.95-.043-.081-.09-.139-.194-.11-.079.022-.685.326-1.072.341-.719.027-1.066-.618-1.066-.618s-.399.228-.716.413c-.318.185-.687.462-.959.627-.232.141-.497.208-.771.243s-.497.023-.563.029c-.066.006-.621-.061-.641.488l.004.16s.987.397 2.344.397 1.566-.399 2.444-.399c.877 0 1.328-.173 1.328-.173z", {["fill"]: "#292F33",["d"]: "M20.436 35.056s.061-.144.061-.448c0-.303-.156-.869-.199-.95-.043-.081-.09-.139-.194-.11-.079.022-.685.326-1.072.341-.719.027-1.066-.618-1.066-.618s-.399.228-.716.413c-.318.185-.687.462-.959.627-.232.141-.497.208-.771.243s-.497.023-.563.029c-.066.006-.621-.061-.641.488l.004.16s.987.397 2.344.397 1.566-.399 2.444-.399c.877 0 1.328-.173 1.328-.173z",}));el.appendChild(svg["path"]("M18.685 35.926c-.058-.052-.123-.22-.173-.243-.05-.023-.57.089-.813.146-.243.058-.66.156-1.152.156-.491 0-1.126-.144-1.519-.243-.393-.098-.701-.23-.77-.274-.07-.043-.05-.063-.046-.096.004-.033.052-.202.052-.202s.251.132.678.237c.426.104.851.183 1.584.183s1.193-.109 1.574-.211c.475-.128 1.163-.267 1.656-.267.38 0 .648-.112.751-.139.024-.006.046.012.046.037v.649c0 .042-.035.139-.146.162-.112.024-1.664.157-1.722.105zm12.222-5.012s-.072-.142-.307-.343-.777-.454-.868-.473c-.091-.02-.167-.022-.213.078-.035.075-.199.746-.444 1.056-.454.575-1.184.418-1.184.418s-.087.46-.153.828-.096.838-.148 1.158c-.044.273-.167.523-.322.758-.154.236-.31.4-.35.456-.039.055-.457.441-.045.82l.127.101s.96-.502 1.857-1.555c.897-1.052.726-1.477 1.306-2.158.58-.68.744-1.144.744-1.144z", {["fill"]: "#292F33",["d"]: "M18.685 35.926c-.058-.052-.123-.22-.173-.243-.05-.023-.57.089-.813.146-.243.058-.66.156-1.152.156-.491 0-1.126-.144-1.519-.243-.393-.098-.701-.23-.77-.274-.07-.043-.05-.063-.046-.096.004-.033.052-.202.052-.202s.251.132.678.237c.426.104.851.183 1.584.183s1.193-.109 1.574-.211c.475-.128 1.163-.267 1.656-.267.38 0 .648-.112.751-.139.024-.006.046.012.046.037v.649c0 .042-.035.139-.146.162-.112.024-1.664.157-1.722.105zm12.222-5.012s-.072-.142-.307-.343-.777-.454-.868-.473c-.091-.02-.167-.022-.213.078-.035.075-.199.746-.444 1.056-.454.575-1.184.418-1.184.418s-.087.46-.153.828-.096.838-.148 1.158c-.044.273-.167.523-.322.758-.154.236-.31.4-.35.456-.039.055-.457.441-.045.82l.127.101s.96-.502 1.857-1.555c.897-1.052.726-1.477 1.306-2.158.58-.68.744-1.144.744-1.144z",}));el.appendChild(svg["path"]("M30.425 32.846c-.078.01-.252-.05-.303-.026-.051.024-.308.5-.424.727-.116.226-.316.615-.64.996s-.856.778-1.192 1.018c-.336.24-.642.391-.721.416s-.082-.003-.104-.028c-.022-.025-.122-.174-.122-.174s.269-.107.631-.369c.363-.261.705-.538 1.189-1.107.484-.568.704-.997.876-1.36.214-.452.562-1.078.887-1.46.251-.295.342-.576.388-.674.011-.023.04-.028.059-.012l.503.429c.033.028.085.118.029.22-.055.103-.978 1.394-1.056 1.404z", {["fill"]: "#292F33",["d"]: "M30.425 32.846c-.078.01-.252-.05-.303-.026-.051.024-.308.5-.424.727-.116.226-.316.615-.64.996s-.856.778-1.192 1.018c-.336.24-.642.391-.721.416s-.082-.003-.104-.028c-.022-.025-.122-.174-.122-.174s.269-.107.631-.369c.363-.261.705-.538 1.189-1.107.484-.568.704-.997.876-1.36.214-.452.562-1.078.887-1.46.251-.295.342-.576.388-.674.011-.023.04-.028.059-.012l.503.429c.033.028.085.118.029.22-.055.103-.978 1.394-1.056 1.404z",}));el.appendChild(svg["path"]("M21.5 1.384c-1.593-.627-4.077.182-4.365 2.043-.287 1.848.239 4.747 1.863 4.572 1.702-.184 3.448-.554 4.138-2.307s-.042-3.681-1.636-4.308z", {["fill"]: "#FFDC5D",["d"]: "M21.5 1.384c-1.593-.627-4.077.182-4.365 2.043-.287 1.848.239 4.747 1.863 4.572 1.702-.184 3.448-.554 4.138-2.307s-.042-3.681-1.636-4.308z",}));el.appendChild(svg["path"]("M22.684 6.143c2.318-2.723-3.266-2.458-3.266-2.458-1.057.038-.329 1.799-.827 2.761-.341.665 1.095 1.018 1.095 1.018s.659-.01.694.79v.007c.008.204-.013.445-.108.769-.473 1.601 1.677 2.582 2.149.978.187-.635.114-1.193.02-1.708l-.009-.046c-.144-.766-.322-1.437.252-2.111z", {["fill"]: "#FFDC5D",["d"]: "M22.684 6.143c2.318-2.723-3.266-2.458-3.266-2.458-1.057.038-.329 1.799-.827 2.761-.341.665 1.095 1.018 1.095 1.018s.659-.01.694.79v.007c.008.204-.013.445-.108.769-.473 1.601 1.677 2.582 2.149.978.187-.635.114-1.193.02-1.708l-.009-.046c-.144-.766-.322-1.437.252-2.111z",}));el.appendChild(svg["path"]("M23.32 2.026C22.259.784 20.74.125 18.301 1.235c-.994.452-1.439.285-1.58.484-.679.953.246 2.01.608 1.799 1.148-.669 2.183-.47 2.447.014s.021 1.354.234 1.359c.578.016.484-.551.714-.878.375-.534.946-.232 1.071.362.099.471 0 1.271-.77 1.412.523 1.151 1.56 1.502 1.56 1.502s.337.132.912-1.001c.576-1.134.877-3.029-.177-4.262z", {["fill"]: "#FFAC33",["d"]: "M23.32 2.026C22.259.784 20.74.125 18.301 1.235c-.994.452-1.439.285-1.58.484-.679.953.246 2.01.608 1.799 1.148-.669 2.183-.47 2.447.014s.021 1.354.234 1.359c.578.016.484-.551.714-.878.375-.534.946-.232 1.071.362.099.471 0 1.271-.77 1.412.523 1.151 1.56 1.502 1.56 1.502s.337.132.912-1.001c.576-1.134.877-3.029-.177-4.262z",}));el.appendChild(svg["path"]("M18.558 34.203c-1.266.109-1.853-.233-1.721-.416.165-.228.128-.397.13-.536.028-2.441-.472-5.991-.472-5.991 0-.348.003-.813.312-1.562.778-1.883 3.951-7.69 3.951-7.69.548-.958 1.771-1.293 2.729-.744.959.548 1.122 1.405.744 2.729-.715 2.508-2.965 5.602-3.903 7.477.224 2.121-.174 3.853.035 5.857.03.288-.54.767-1.805.876z", {["fill"]: "#2A6797",["d"]: "M18.558 34.203c-1.266.109-1.853-.233-1.721-.416.165-.228.128-.397.13-.536.028-2.441-.472-5.991-.472-5.991 0-.348.003-.813.312-1.562.778-1.883 3.951-7.69 3.951-7.69.548-.958 1.771-1.293 2.729-.744.959.548 1.122 1.405.744 2.729-.715 2.508-2.965 5.602-3.903 7.477.224 2.121-.174 3.853.035 5.857.03.288-.54.767-1.805.876z",}));el.appendChild(svg["path"]("M29.292 31.931c-.364.553-.97.942-1.598.838-1.269-1.924-4.955-5.321-4.955-5.321-.241-.25-.562-.587-.86-1.341-.748-1.895-2.498-8.277-2.498-8.277-.272-1.07.376-2.16 1.446-2.43 1.07-.272 1.783.232 2.43 1.446 1.227 2.301 1.757 6.09 2.384 8.09 1.87 1.568 2.383 3.603 4.275 5.151-.064.857-.26 1.291-.624 1.844z", {["fill"]: "#4289C1",["d"]: "M29.292 31.931c-.364.553-.97.942-1.598.838-1.269-1.924-4.955-5.321-4.955-5.321-.241-.25-.562-.587-.86-1.341-.748-1.895-2.498-8.277-2.498-8.277-.272-1.07.376-2.16 1.446-2.43 1.07-.272 1.783.232 2.43 1.446 1.227 2.301 1.757 6.09 2.384 8.09 1.87 1.568 2.383 3.603 4.275 5.151-.064.857-.26 1.291-.624 1.844z",}));el.appendChild(svg["path"]("M25.495 20s0 1-2 1h-4.898c-.415-2-.027-5.004.006-7.765.043-3.623 2.298-5.609 3.71-5.155 1.846.594 2.693 2.641 2.932 5.858.239 3.216.25 6.062.25 6.062z", {["fill"]: "#77B255",["d"]: "M25.495 20s0 1-2 1h-4.898c-.415-2-.027-5.004.006-7.765.043-3.623 2.298-5.609 3.71-5.155 1.846.594 2.693 2.641 2.932 5.858.239 3.216.25 6.062.25 6.062z",}));el.appendChild(svg["path"]("M20.029 11.693c-.781 1.172-2.291 3.808-2.518 3.909-1.205.534-2.549 1.22-3.445 1.314-.649.068-1.254.68-1.508.925-.316.304-.75 1.008-.63 1.37.075.226.571.488.742.253.332-.458.973-.535 1.49-.889 1.038-.712 3.284-.765 4.556-1.709.528-.391 1.677-1.309 3.2-3.9-.592-.426-1.887-1.273-1.887-1.273z", {["fill"]: "#FFDC5D",["d"]: "M20.029 11.693c-.781 1.172-2.291 3.808-2.518 3.909-1.205.534-2.549 1.22-3.445 1.314-.649.068-1.254.68-1.508.925-.316.304-.75 1.008-.63 1.37.075.226.571.488.742.253.332-.458.973-.535 1.49-.889 1.038-.712 3.284-.765 4.556-1.709.528-.391 1.677-1.309 3.2-3.9-.592-.426-1.887-1.273-1.887-1.273z",}));el.appendChild(svg["path"]("M14.21 17.018c.477.152.847.624.557 1.114-.29.49.403.185.512-.045.223-.468-.178-1.158-.646-1.314-.468-.156-.746.142-.423.245z", {["fill"]: "#292F33",["d"]: "M14.21 17.018c.477.152.847.624.557 1.114-.29.49.403.185.512-.045.223-.468-.178-1.158-.646-1.314-.468-.156-.746.142-.423.245z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};