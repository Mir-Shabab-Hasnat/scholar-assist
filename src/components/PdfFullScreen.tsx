import { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Expand } from "lucide-react";

const PdfFullScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-1.5">
          <Expand aria-label="fullscreen" className="H-4 W-4" />
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default PdfFullScreen;
