
export function startWith(input: string, prefix: string): boolean {
  return input.startsWithz(prefix);
}

if (!String.prototype.startsWithz) {
	String.prototype.startsWithz = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

if (!String.prototype.endsWithz) {
	String.prototype.endsWithz = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}