/* Teaching example. Input: 1 <= n <= MAX_N, valid start, complete finite
   nonnegative cost matrix with zero diagonal. Tie: smallest vertex index.
   Nearest-neighbor is a heuristic; optimality is NOT guaranteed. */
#include <assert.h>
#include <stdbool.h>
#include <math.h>
#include <stdio.h>
#define MAX_N 32

double nearest_neighbor(int n, const double cost[n][n], int start, int path[n+1]) {
    assert(n >= 1 && n <= MAX_N && start >= 0 && start < n);
    bool visited[MAX_N] = {false};
    int current = start;
    double total = 0.0;
    path[0] = start;
    visited[start] = true;
    for (int step = 1; step < n; ++step) {
        int next = -1;
        for (int j = 0; j < n; ++j) {
            if (!visited[j] && (next < 0 || cost[current][j] < cost[current][next])) {
                next = j;
            }
        }
        assert(next >= 0);
        total += cost[current][next];
        path[step] = next;
        visited[next] = true;
        current = next;
    }
    total += cost[current][start];
    path[n] = start;
    return total;
}

int main(void) {
    /* A=east, B=south, C=west, D=north. Weights from the teacher's graph,
       used as teaching km, NOT measured campus distances. */
    const double cost[4][4] = {
        {0,2,6,5}, {2,0,4,4},
        {6,4,0,2}, {5,4,2,0}
    };
    int path[5];
    double total = nearest_neighbor(4, cost, 0, path);
    assert(fabs(total - 13) < 1e-9);
    const int expected[5] = {0,1,2,3,0};
    for (int i = 0; i <= 4; ++i) {
        assert(path[i] == expected[i]);
        printf("%c%s", 'A'+path[i], i<4 ? " -> " : "\n");
    }
    printf("Total: %.3f\n", total);
    int from_c[5];
    double total_c = nearest_neighbor(4, cost, 2, from_c);
    const int expected_c[5] = {2,3,1,0,2};
    assert(fabs(total_c - 14) < 1e-9);
    for (int i = 0; i <= 4; ++i) assert(from_c[i] == expected_c[i]);
    puts("Starting from C: C -> D -> B -> A -> C; total 14 (optimum 13).");
    int again[5];
    assert(fabs(nearest_neighbor(4, cost, 0, again)-total) < 1e-9);
    for (int i = 0; i <= 4; ++i) assert(path[i] == again[i]);
    const double single[1][1] = {{0}};
    int one[2];
    assert(nearest_neighbor(1, single, 0, one) == 0 && one[0] == 0 && one[1] == 0);
    const double ties[3][3] = {{0,1,1},{1,0,1},{1,1,0}};
    int tied[4];
    assert(nearest_neighbor(3, ties, 0, tied) == 3 && tied[1] == 1);
    puts("Single vertex, tie-breaking, and repeated-call checks passed.");
    return 0;
}
