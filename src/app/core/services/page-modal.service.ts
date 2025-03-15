import { inject, Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { PageModalOptions } from "../../general/page-modal.model";
import { SuccessPromptComponent } from "../../shared/modal/success-prompt/success-prompt.component";
import { ErrorPromptComponent } from "../../shared/modal/error-prompt/error-prompt.component";

@Injectable({ providedIn: "root" })
export class PageModalService {
    private dialog = inject(MatDialog)

    open(data: PageModalOptions): MatDialogRef<any, any> | null {
        switch (data.type) {
            case "success":
                return this.dialog.open(SuccessPromptComponent, { panelClass: "remita-md-dialog", data, disableClose: data.disableClose ?? false });
            case "error":
                return this.dialog.open(ErrorPromptComponent, { panelClass: "remita-md-dialog", data, disableClose: data.disableClose ?? false });
            default:
                return null;
        }
    }

    closeAll() {
        this.dialog.closeAll();
    }
}