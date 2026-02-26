#include <stdio.h>

int main() {
    int pages[50], frames[10];
    int n, f, i, j, k, pageFaults = 0;
    int flag, pos, max, future;

    printf("Enter number of pages: ");
    scanf("%d", &n);

    printf("Enter reference string: ");
    for(i = 0; i < n; i++)
        scanf("%d", &pages[i]);

    printf("Enter number of frames: ");
    scanf("%d", &f);

    for(i = 0; i < f; i++)
        frames[i] = -1;

    for(i = 0; i < n; i++) {
        flag = 0;

        for(j = 0; j < f; j++) {
            if(frames[j] == pages[i]) {
                flag = 1;
                break;
            }
        }

        if(flag == 0) {
            pos = -1;
            max = -1;

            for(j = 0; j < f; j++) {
                future = 0;
                for(k = i + 1; k < n; k++) {
                    if(frames[j] == pages[k]) {
                        future = k;
                        break;
                    }
                }

                if(future == 0) {
                    pos = j;
                    break;
                }

                if(future > max) {
                    max = future;
                    pos = j;
                }
            }

            frames[pos] = pages[i];
            pageFaults++;
        }

        printf("Frames: ");
        for(k = 0; k < f; k++)
            printf("%d ", frames[k]);
        printf("\n");
    }

    printf("Total Page Faults = %d\n", pageFaults);
    return 0;
}