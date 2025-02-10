import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";

export function Feedback() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Send Feedback</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            Have suggestions? Found a bug? Let us know!
          </p>
          <Button
            className="w-full"
            onClick={() => {
              window.open(
                "https://github.com/javianng/networking-wallpaper-generator/issues",
                "_blank",
              );
            }}
          >
            Open GitHub Issue
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Feedback
        </Button>
      )}
    </div>
  );
}
