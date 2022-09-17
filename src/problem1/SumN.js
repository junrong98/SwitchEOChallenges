var sum_to_n_a = function(n) {
    return n == 0 ? 0 : n += sum_to_n_a(n-1);
};

var sum_to_n_b = function(n) {
    return (0.5 * n * n) + (0.5 * n);
};

var sum_to_n_c = function(n) {
    return (n*(n+1))/2;
};