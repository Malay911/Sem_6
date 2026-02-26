#include <stdio.h>

int main() {
    int pages[50], frames[10], time[10];
    int n, f, i, j, k, pageFaults = 0, counter = 0;
    int flag, min, pos;

    printf("Enter number of pages: ");
    scanf("%d", &n);

    printf("Enter reference string: ");
    for(i = 0; i < n; i++)
        scanf("%d", &pages[i]);

    printf("Enter number of frames: ");
    scanf("%d", &f);

    for(i = 0; i < f; i++) {
        frames[i] = -1;
        time[i] = 0;
    }

    for(i = 0; i < n; i++) {
        flag = 0;

        for(j = 0; j < f; j++) {
            if(frames[j] == pages[i]) {
                counter++;
                time[j] = counter;
                flag = 1;
                break;
            }
        }

        if(flag == 0) {
            min = time[0];
            pos = 0;

            for(j = 1; j < f; j++) {
                if(time[j] < min) {
                    min = time[j];
                    pos = j;
                }
            }

            counter++;
            frames[pos] = pages[i];
            time[pos] = counter;
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