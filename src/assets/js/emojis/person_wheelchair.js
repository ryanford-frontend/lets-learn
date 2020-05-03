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
				el.appendChild(svg["path"]("M8.211 30.079s.097-.127.175-.426c.078-.299.069-.897.047-.988-.022-.091-.053-.16-.163-.158-.083.001-.759.146-1.144.061-.716-.158-.892-.883-.892-.883s-.452.123-.812.223c-.361.101-.796.279-1.106.372-.265.079-.543.078-.823.041-.279-.036-.496-.105-.563-.116s-.597-.219-.757.317l-.037.159s.871.645 2.209.993 1.646.009 2.511.234 1.355.171 1.355.171z", {["fill"]: "#292F33",["d"]: "M8.211 30.079s.097-.127.175-.426c.078-.299.069-.897.047-.988-.022-.091-.053-.16-.163-.158-.083.001-.759.146-1.144.061-.716-.158-.892-.883-.892-.883s-.452.123-.812.223c-.361.101-.796.279-1.106.372-.265.079-.543.078-.823.041-.279-.036-.496-.105-.563-.116s-.597-.219-.757.317l-.037.159s.871.645 2.209.993 1.646.009 2.511.234 1.355.171 1.355.171z",}));el.appendChild(svg["path"]("M6.262 30.488c-.044-.066-.065-.248-.109-.284-.043-.036-.585-.059-.839-.064-.254-.005-.691-.016-1.175-.142s-1.074-.431-1.436-.629-.632-.407-.689-.468c-.057-.061-.033-.075-.02-.106.013-.031.103-.186.103-.186s.214.195.607.407.792.399 1.514.587 1.204.199 1.606.195c.501-.004 1.215.035 1.701.162.375.098.668.056.776.056.025 0 .043.023.036.048l-.167.64c-.011.042-.07.128-.186.122-.114-.004-1.679-.271-1.722-.338z", {["fill"]: "#292F33",["d"]: "M6.262 30.488c-.044-.066-.065-.248-.109-.284-.043-.036-.585-.059-.839-.064-.254-.005-.691-.016-1.175-.142s-1.074-.431-1.436-.629-.632-.407-.689-.468c-.057-.061-.033-.075-.02-.106.013-.031.103-.186.103-.186s.214.195.607.407.792.399 1.514.587 1.204.199 1.606.195c.501-.004 1.215.035 1.701.162.375.098.668.056.776.056.025 0 .043.023.036.048l-.167.64c-.011.042-.07.128-.186.122-.114-.004-1.679-.271-1.722-.338z",}));el.appendChild(svg["path"]("M24.032 17.279c.193 1.421-.135 2.945-1.22 3.321-1.039.36-3.058.116-3.058.116s-.66.468-.426 1.231c.133.434.314.645.262.692-.046.042-.486.02-.684.027-.528.02-1.114-.115-2.108-.301-.994-.187-1.44-.16-2.522-.359-1.198-.22-2.051-.659-2.491-1.745-.375-.927.091-2.139 1.419-2.764 1.08-.508 4.292-.724 5.498-.712 1.207.011 5.162-.741 5.33.494z", {["fill"]: "#4289C1",["d"]: "M24.032 17.279c.193 1.421-.135 2.945-1.22 3.321-1.039.36-3.058.116-3.058.116s-.66.468-.426 1.231c.133.434.314.645.262.692-.046.042-.486.02-.684.027-.528.02-1.114-.115-2.108-.301-.994-.187-1.44-.16-2.522-.359-1.198-.22-2.051-.659-2.491-1.745-.375-.927.091-2.139 1.419-2.764 1.08-.508 4.292-.724 5.498-.712 1.207.011 5.162-.741 5.33.494z",}));el.appendChild(svg["path"]("M6.879 28.832c-.656-.086-1.341-.485-1.521-1.095 1.178-1.982 3-7.829 3-7.829.541-1.798 1.213-3.546 2.843-3.443 2.1.133 5.697.533 5.697.533 2.296.13 1.228.904 1.938 1.75.712.845-1.115 2.095-2.611 2.126-2.607.054-3.902-.113-5.428 1.324-.596 2.367-1.706 4.252-2.275 6.63-.799.315-.987.091-1.643.004z", {["fill"]: "#4289C1",["d"]: "M6.879 28.832c-.656-.086-1.341-.485-1.521-1.095 1.178-1.982 3-7.829 3-7.829.541-1.798 1.213-3.546 2.843-3.443 2.1.133 5.697.533 5.697.533 2.296.13 1.228.904 1.938 1.75.712.845-1.115 2.095-2.611 2.126-2.607.054-3.902-.113-5.428 1.324-.596 2.367-1.706 4.252-2.275 6.63-.799.315-.987.091-1.643.004z",}));el.appendChild(svg["path"]("M21.455.928C20.11.273 17.97.83 17.513 2.411c-.637 2.207.496 4.206 1.922 4.164 1.496-.044 2.431-.302 3.152-1.782.72-1.48.214-3.21-1.132-3.865z", {["fill"]: "#FFDC5D",["d"]: "M21.455.928C20.11.273 17.97.83 17.513 2.411c-.637 2.207.496 4.206 1.922 4.164 1.496-.044 2.431-.302 3.152-1.782.72-1.48.214-3.21-1.132-3.865z",}));el.appendChild(svg["path"]("M22.162 5.155c2.205-2.215-2.678-2.364-2.678-2.364-.923-.039-.41 1.545-.908 2.349-.342.557.884.962.884.962s.575.036.551.735v.006c-.007.178-.042.387-.147.662-.521 1.362 1.285 2.364 1.805.999.206-.54.181-1.031.133-1.487l-.004-.04c-.072-.677-.181-1.274.364-1.822z", {["fill"]: "#FFDC5D",["d"]: "M22.162 5.155c2.205-2.215-2.678-2.364-2.678-2.364-.923-.039-.41 1.545-.908 2.349-.342.557.884.962.884.962s.575.036.551.735v.006c-.007.178-.042.387-.147.662-.521 1.362 1.285 2.364 1.805.999.206-.54.181-1.031.133-1.487l-.004-.04c-.072-.677-.181-1.274.364-1.822z",}));el.appendChild(svg["path"]("M23.164 1.546c-.612-.98-2.846-1.978-4.396-.919-.996-.254-1.458.676-1.416 1.235.034.447 1.109.645 1.316 1.504.205-.195.289-.622.266-.855.319.359.1 1.221 1.414 1.898 1.27.654.947 1.796.947 1.796s.717-.273 1.242-.792c1.003-.992 1.302-2.787.627-3.867z", {["fill"]: "#FFAC33",["d"]: "M23.164 1.546c-.612-.98-2.846-1.978-4.396-.919-.996-.254-1.458.676-1.416 1.235.034.447 1.109.645 1.316 1.504.205-.195.289-.622.266-.855.319.359.1 1.221 1.414 1.898 1.27.654.947 1.796.947 1.796s.717-.273 1.242-.792c1.003-.992 1.302-2.787.627-3.867z",}));el.appendChild(svg["path"]("M24.698 16.173c.029.719.15 1.674-.276 1.567-1.679-.424-5.585-.451-5.585-.451.516-2.766-.579-4.69-.425-6.461.176-2.023 1.61-4.137 2.851-4.059.522.033 1.136.428 1.511.77.278.253.924.961 1.141 1.169 1.106 1.06.124 1.405.327 2.596.444 2.598.427 4.15.456 4.869z", {["fill"]: "#FA743E",["d"]: "M24.698 16.173c.029.719.15 1.674-.276 1.567-1.679-.424-5.585-.451-5.585-.451.516-2.766-.579-4.69-.425-6.461.176-2.023 1.61-4.137 2.851-4.059.522.033 1.136.428 1.511.77.278.253.924.961 1.141 1.169 1.106 1.06.124 1.405.327 2.596.444 2.598.427 4.15.456 4.869z",}));el.appendChild(svg["path"]("M13.465 27.092l10.824.95c.274.024.518-.181.542-.455.024-.274-.181-.518-.455-.542l-10.824-.95c-.274-.024-.518.181-.542.455-.024.274.181.518.455.542z", {["d"]: "M13.465 27.092l10.824.95c.274.024.518-.181.542-.455.024-.274-.181-.518-.455-.542l-10.824-.95c-.274-.024-.518.181-.542.455-.024.274.181.518.455.542z",["fill"]: "#DD2E44",}));el.appendChild(svg["path"]("M24.288 28.041c-.274-.024-.478-.268-.455-.542l.436-4.981c.024-.274.268-.478.542-.455.274.024.478.268.455.542l-.436 4.981c-.024.275-.268.479-.542.455zm-10.738-7.58c-.274-.024-.518.181-.542.455l-1.015 11.597c-.024.274.181.518.455.542.274.024.518-.181.542-.455l1.015-11.597c.023-.274-.181-.518-.455-.542z", {["d"]: "M24.288 28.041c-.274-.024-.478-.268-.455-.542l.436-4.981c.024-.274.268-.478.542-.455.274.024.478.268.455.542l-.436 4.981c-.024.275-.268.479-.542.455zm-10.738-7.58c-.274-.024-.518.181-.542.455l-1.015 11.597c-.024.274.181.518.455.542.274.024.518-.181.542-.455l1.015-11.597c.023-.274-.181-.518-.455-.542z",["fill"]: "#DD2E44",}));el.appendChild(svg["path"]("M23.524 20.592c1.431-.206 2.834-.148 2.345.544-.489.692-1.575 1.905-3.418 1.707-1.844-.198.185-2.123 1.073-2.251z", {["fill"]: "#292F33",["d"]: "M23.524 20.592c1.431-.206 2.834-.148 2.345.544-.489.692-1.575 1.905-3.418 1.707-1.844-.198.185-2.123 1.073-2.251z",}));el.appendChild(svg["path"]("M22.45 22.843l-9.962-.872c-.996-.087-.996-.087-.909-1.083.048-.548.535-.957 1.083-.909l9.962.872c.548.048.957.535.909 1.083-.087.996-.087.996-1.083.909z", {["fill"]: "#292F33",["d"]: "M22.45 22.843l-9.962-.872c-.996-.087-.996-.087-.909-1.083.048-.548.535-.957 1.083-.909l9.962.872c.548.048.957.535.909 1.083-.087.996-.087.996-1.083.909z",}));el.appendChild(svg["path"]("M22.964 23.136l-10.958-.959c-.274-.024-.478-.268-.455-.542.024-.274.268-.478.542-.455l10.958.959c.274.024.478.268.455.542-.025.275-.268.479-.542.455z", {["fill"]: "#DD2E44",["d"]: "M22.964 23.136l-10.958-.959c-.274-.024-.478-.268-.455-.542.024-.274.268-.478.542-.455l10.958.959c.274.024.478.268.455.542-.025.275-.268.479-.542.455z",}));el.appendChild(svg["path"]("M27.278 9.454l-.872 9.962c-.087.996-.087.996-1.083.909-.548-.048-.957-.535-.909-1.083l.872-9.962c.048-.548.535-.957 1.083-.909.996.087.996.087.909 1.083z", {["fill"]: "#292F33",["d"]: "M27.278 9.454l-.872 9.962c-.087.996-.087.996-1.083.909-.548-.048-.957-.535-.909-1.083l.872-9.962c.048-.548.535-.957 1.083-.909.996.087.996.087.909 1.083z",}));el.appendChild(svg["path"]("M27.714 8.996l-.959 10.958c-.024.274-.268.478-.542.455-.274-.024-.478-.268-.455-.542l.959-10.958c.024-.274.268-.478.542-.455.274.025.479.268.455.542z", {["fill"]: "#DD2E44",["d"]: "M27.714 8.996l-.959 10.958c-.024.274-.268.478-.542.455-.274-.024-.478-.268-.455-.542l.959-10.958c.024-.274.268-.478.542-.455.274.025.479.268.455.542z",}));el.appendChild(svg["path"]("M24.62 18.519l-7.552-.661c-.755-.066-.755-.066-.69-.812.036-.41.405-.716.82-.68l7.552.661c.415.036.726.402.69.812-.064.746-.064.746-.82.68z", {["fill"]: "#292F33",["d"]: "M24.62 18.519l-7.552-.661c-.755-.066-.755-.066-.69-.812.036-.41.405-.716.82-.68l7.552.661c.415.036.726.402.69.812-.064.746-.064.746-.82.68z",}));el.appendChild(svg["path"]("M22.553 22.096c1.004.088 2.989.261 3.25-2.727s1.258-2.901.996.087-1.909 3.848-4.333 3.636c-1.993-.174-1.906-1.17.087-.996zm-10.449-.914c1.993.166 2.392 1.218.4 1.039-.883-.079-.962.297-1.163 1.063-.189.721-.456 1.803-.858 3.318-.295 1.112-1.221.712-.977-.257.411-1.63.798-3.05 1.052-3.953.258-.922.502-1.297 1.546-1.21z", {["fill"]: "#DD2E44",["d"]: "M22.553 22.096c1.004.088 2.989.261 3.25-2.727s1.258-2.901.996.087-1.909 3.848-4.333 3.636c-1.993-.174-1.906-1.17.087-.996zm-10.449-.914c1.993.166 2.392 1.218.4 1.039-.883-.079-.962.297-1.163 1.063-.189.721-.456 1.803-.858 3.318-.295 1.112-1.221.712-.977-.257.411-1.63.798-3.05 1.052-3.953.258-.922.502-1.297 1.546-1.21z",}));el.appendChild(svg["circle"](24.5, 27.5, 3, {["cy"]: "27.5",["fill"]: "#66757F",["cx"]: "24.5",["r"]: "1.5",}));el.appendChild(svg["path"]("M31.245 30.817l-6.062-3.5 3.5-6.062-.866-.5-3.5 6.062-6.062-3.5-.5.866 6.062 3.5-3.5 6.062.866.5 3.5-6.062 6.062 3.5z", {["d"]: "M31.245 30.817l-6.062-3.5 3.5-6.062-.866-.5-3.5 6.062-6.062-3.5-.5.866 6.062 3.5-3.5 6.062.866.5 3.5-6.062 6.062 3.5z",["fill"]: "#66757F",}));el.appendChild(svg["path"]("M26.924 34.615l-1.812-6.761 6.762-1.812-.259-.966-6.761 1.812-1.812-6.762-.966.259 1.812 6.761-6.762 1.812.259.966 6.761-1.812 1.812 6.762z", {["d"]: "M26.924 34.615l-1.812-6.761 6.762-1.812-.259-.966-6.761 1.812-1.812-6.762-.966.259 1.812 6.761-6.762 1.812.259.966 6.761-1.812 1.812 6.762z",["fill"]: "#66757F",}));el.appendChild(svg["path"]("M24.5 19c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm0 15c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z", {["fill"]: "#292F33",["d"]: "M24.5 19c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm0 15c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z",}));el.appendChild(svg["path"]("M24.5 20c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm0 14c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm-9.152-.433l-2.165-1.25 1.25-2.165-.866-.5-1.25 2.165-2.165-1.25-.5.866 2.165 1.25-1.25 2.165.866.5 1.25-2.165 2.165 1.25z", {["fill"]: "#66757F",["d"]: "M24.5 20c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5 7.5-3.358 7.5-7.5-3.358-7.5-7.5-7.5zm0 14c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm-9.152-.433l-2.165-1.25 1.25-2.165-.866-.5-1.25 2.165-2.165-1.25-.5.866 2.165 1.25-1.25 2.165.866.5 1.25-2.165 2.165 1.25z",}));el.appendChild(svg["path"]("M12.5 29C10.567 29 9 30.567 9 32.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 6c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z", {["fill"]: "#292F33",["d"]: "M12.5 29C10.567 29 9 30.567 9 32.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 6c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z",}));el.appendChild(svg["path"]("M10.288 25.363c-.266-.071-.541.088-.612.354l-1.553 5.796c-.071.266.088.541.354.612.266.071.541-.088.612-.354l1.553-5.796c.07-.265-.089-.541-.354-.612z", {["fill"]: "#DD2E44",["d"]: "M10.288 25.363c-.266-.071-.541.088-.612.354l-1.553 5.796c-.071.266.088.541.354.612.266.071.541-.088.612-.354l1.553-5.796c.07-.265-.089-.541-.354-.612z",}));el.appendChild(svg["path"]("M8.476 32.125L4.612 31.09c-.266-.071-.425-.347-.354-.612.071-.266.347-.425.612-.354l3.864 1.035c.266.071.426.346.354.612-.071.266-.346.425-.612.354z", {["fill"]: "#66757F",["d"]: "M8.476 32.125L4.612 31.09c-.266-.071-.425-.347-.354-.612.071-.266.347-.425.612-.354l3.864 1.035c.266.071.426.346.354.612-.071.266-.346.425-.612.354z",}));el.appendChild(svg["path"]("M30.103 9.969l-2.954-.521c-.271-.048-.453-.308-.406-.579.048-.271.308-.453.579-.406l2.954.521c.271.048.453.308.406.579-.048.272-.308.454-.579.406z", {["fill"]: "#DD2E44",["d"]: "M30.103 9.969l-2.954-.521c-.271-.048-.453-.308-.406-.579.048-.271.308-.453.579-.406l2.954.521c.271.048.453.308.406.579-.048.272-.308.454-.579.406z",}));el.appendChild(svg["path"]("M31.088 10.143l-2.615-.467c-.271-.048-.26-.274-.213-.545.048-.271.116-.487.386-.44l2.615.467c.271.048.453.308.406.579-.048.271-.308.454-.579.406z", {["fill"]: "#292F33",["d"]: "M31.088 10.143l-2.615-.467c-.271-.048-.26-.274-.213-.545.048-.271.116-.487.386-.44l2.615.467c.271.048.453.308.406.579-.048.271-.308.454-.579.406z",}));el.appendChild(svg["path"]("M22.118 10.597c1.142.988 3.458 2.697 3.436 2.951-.128 1.469.543 3.175.369 4.087-.126.661-.665 1.138-.594 1.495.667-.009.443 1.15.729 1.665.301.542 1.171-.093 1.282-.949.081-.629-.102-1.11-.167-1.752-.093-.915 1.094-3.661.22-5.467-.295-.609-1.531-2.277-3.635-4.122-.595.457-1.64 2.092-1.64 2.092z", {["fill"]: "#FFDC5D",["d"]: "M22.118 10.597c1.142.988 3.458 2.697 3.436 2.951-.128 1.469.543 3.175.369 4.087-.126.661-.665 1.138-.594 1.495.667-.009.443 1.15.729 1.665.301.542 1.171-.093 1.282-.949.081-.629-.102-1.11-.167-1.752-.093-.915 1.094-3.661.22-5.467-.295-.609-1.531-2.277-3.635-4.122-.595.457-1.64 2.092-1.64 2.092z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};