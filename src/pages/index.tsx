import { useState } from "react";
import { toJpeg } from "html-to-image";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { type FormData, Phone } from "~/components/Phone";
import { type PhoneDimensions, phoneModels } from "~/data/PhoneModel";

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    linkedin: "",
    github: "",
    telegram: "",
    phone: "",
    email: "",
    fullName: "",
    positions: [{ jobTitle: "", company: "" }],
    additionalInfo: "",
  });

  const [dimensions, setDimensions] = useState<PhoneDimensions>(
    phoneModels.iPhone13 ?? { width: 0, height: 0 },
  );
  const [selectedModel, setSelectedModel] = useState<string>("iPhone13");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: string,
  ) => {
    if (typeof index === "number" && field) {
      const updatedPositions = formData.positions.map((position, idx) =>
        idx === index ? { ...position, [field]: e.target.value } : position,
      );
      setFormData({
        ...formData,
        positions: updatedPositions,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const removePosition = (index: number) => {
    const updatedPositions = formData.positions.filter(
      (_, idx) => idx !== index,
    );
    setFormData({
      ...formData,
      positions: updatedPositions,
    });
  };

  const addPosition = () => {
    const newPositions = [...formData.positions, { jobTitle: "", company: "" }];
    setFormData({
      ...formData,
      positions: newPositions,
    });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    setSelectedModel(model);
    setDimensions(phoneModels[model] ?? { width: 0, height: 0 });
  };

  const handleGenerateWallpaper = () => {
    const element = document.getElementById("capture");
    if (element) {
      toJpeg(element, {
        quality: 1.0,
        pixelRatio: window.devicePixelRatio,
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "networking-lock-screen.jpg";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Could not generate image", error);
        });
    } else {
      console.error("Element not found");
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-neutral-100">
      <div className="w-full max-w-7xl p-12">
        <form className="flex flex-col gap-3">
          <h1 className="pb-12 text-5xl font-semibold">
            Networking Lock Screen Generator
          </h1>
          <div className="grid grid-cols-2 gap-3">
            <section className="flex flex-col justify-start gap-3">
              <div className="flex items-center gap-2">
                <p className="pl-1 text-sm font-extralight">Phone Model: </p>
                <select
                  value={selectedModel}
                  onChange={handleModelChange}
                  className="dropdown rounded-md border px-2 py-3 text-sm"
                >
                  {Object.keys(phoneModels).map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="telegram"
                placeholder="Telegram Handle"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="linkedin"
                placeholder="LinkedIn URL"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="github"
                placeholder="GitHub URL"
                onChange={handleChange}
              />
              <Textarea
                name="additionalInfo"
                placeholder="Additional Information"
                value={formData.additionalInfo}
                onChange={(e) => handleChange(e)}
              />
              {formData.positions.map((position, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={position.jobTitle}
                    onChange={(e) => handleChange(e, index, "jobTitle")}
                  />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={position.company}
                    onChange={(e) => handleChange(e, index, "company")}
                  />
                  {formData.positions.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => removePosition(index)}
                      className="remove-button"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                onClick={addPosition}
                className="add-button"
              >
                Add Job
              </Button>
            </section>
            <aside className="flex justify-center">
              {Phone(dimensions, formData)}
            </aside>
          </div>
          <Button
            type="button"
            onClick={handleGenerateWallpaper}
            className="btn-submit"
          >
            Generate Wallpaper
          </Button>
        </form>
      </div>
    </main>
  );
}
