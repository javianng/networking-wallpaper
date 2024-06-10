import { useState } from "react";
import { toJpeg } from "html-to-image";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { type FormData, Phone } from "~/components/Phone";
import { type PhoneDimensions, phoneModels } from "~/data/PhoneModel";
import Image from "next/image";

function QRCodeCountButtons({
  qrCodeCount,
  setQRCodeCount,
}: {
  qrCodeCount: number;
  setQRCodeCount: (count: number) => void;
}) {
  return (
    <section className="flex w-full flex-col items-center bg-white p-24">
      <h1 className="pb-24 text-5xl font-bold">
        Choose Your{" "}
        <span className="underline decoration-8 underline-offset-[12px]">
          Design
        </span>
      </h1>
      <div className="grid max-w-4xl grid-cols-1 grid-rows-2 justify-between gap-20 sm:grid-cols-2 sm:grid-rows-1">
        <div
          onClick={() => {
            setQRCodeCount(1);
            const element = document.getElementById("details");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`flex h-[32rem] transition-transform duration-300 ${
            qrCodeCount === 1 ? "scale-105" : ""
          }`}
        >
          <Image
            src={"/one_qrcode.png"}
            alt="One QR Code"
            width={1600}
            height={1600}
            className=" flex object-scale-down"
          />
        </div>
        <div
          onClick={() => {
            setQRCodeCount(2);
            const element = document.getElementById("details");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`flex h-[32rem] transition-transform duration-300 ${
            qrCodeCount === 2 ? "scale-105" : ""
          }`}
        >
          <Image
            src={"/two_qrcode.png"}
            alt="Two QR Codes"
            width={1600}
            height={1600}
            className=" flex object-scale-down"
          />
        </div>
      </div>
    </section>
  );
}

function FormFields({
  formData,
  handleChange,
  addPosition,
  removePosition,
  handleModelChange,
  handleImageUpload,
  selectedModel,
  dimensions,
}: {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: string,
    type?: string,
  ) => void;
  addPosition: () => void;
  removePosition: (index: number) => void;
  handleModelChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedModel: string;
  dimensions: PhoneDimensions;
}) {
  return (
    <>
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
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="input-field cursor-pointer"
      />
      {formData.qrCodes.length < 2 && (
        <Textarea
          name="additionalInfo"
          placeholder="Additional Information"
          value={formData.additionalInfo}
          onChange={(e) => handleChange(e)}
        />
      )}
      {formData.positions.map((position, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={position.jobTitle}
            onChange={(e) => handleChange(e, index, "jobTitle", "position")}
          />
          <Input
            type="text"
            name="company"
            placeholder="Company"
            value={position.company}
            onChange={(e) => handleChange(e, index, "company", "position")}
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
        disabled={formData.positions.length >= 3}
      >
        Add Job
      </Button>
    </>
  );
}

function QRCodeFields({
  formData,
  handleChange,
}: {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: string,
    type?: string,
  ) => void;
}) {
  return (
    <>
      {formData.qrCodes.map((qrCode, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            type="text"
            name="url"
            placeholder="QR Code URL"
            value={qrCode.url}
            onChange={(e) => handleChange(e, index, "url", "qrCode")}
          />
          <Input
            type="text"
            name="label"
            placeholder="Label"
            value={qrCode.label}
            onChange={(e) => handleChange(e, index, "label", "qrCode")}
          />
        </div>
      ))}
    </>
  );
}

export default function Generator() {
  const [formData, setFormData] = useState<FormData>({
    linkedin: "",
    github: "",
    telegram: "",
    phone: "",
    email: "",
    fullName: "",
    positions: [{ jobTitle: "", company: "" }],
    additionalInfo: "",
    qrCodes: [{ url: "", label: "LinkedIn" }],
  });

  const [companyImage, setCompanyImage] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<PhoneDimensions>(
    phoneModels.iPhone13 ?? { width: 0, height: 0 },
  );
  const [selectedModel, setSelectedModel] = useState<string>("iPhone13");

  const handleQRCountChange = (count: number) => {
    if (count === 1) {
      setFormData({
        ...formData,
        qrCodes: formData.qrCodes.slice(0, 1),
      });
    } else if (count === 2) {
      setFormData({
        ...formData,
        qrCodes: [
          ...formData.qrCodes,
          { url: "", label: "Custom QR Code" },
        ].slice(0, 2),
      });
    }
  };

  const detectLabel = (url: string): string => {
    if (url.includes("linkedin.com")) return "LinkedIn";
    if (url.includes("github.com")) return "GitHub";
    return "Custom QR Code";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    field?: string,
    type?: string,
  ) => {
    if (type === "position" && typeof index === "number" && field) {
      const updatedPositions = formData.positions.map((position, idx) =>
        idx === index ? { ...position, [field]: e.target.value } : position,
      );
      setFormData({
        ...formData,
        positions: updatedPositions,
      });
    } else if (type === "qrCode" && typeof index === "number" && field) {
      const updatedQRCodes = formData.qrCodes.map((qrCode, idx) => {
        if (idx === index) {
          const updatedQRCode = { ...qrCode, [field]: e.target.value };
          if (field === "url") {
            updatedQRCode.label = detectLabel(e.target.value);
          }
          return updatedQRCode;
        }
        return qrCode;
      });
      setFormData({
        ...formData,
        qrCodes: updatedQRCodes,
      });
    } else {
      if (e.target.name === "additionalInfo") {
        const lines = e.target.value.split("\n");
        if (lines.length > 5) {
          return;
        }
      }
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCompanyImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
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
    if (formData.positions.length < 3) {
      const newPositions = [
        ...formData.positions,
        { jobTitle: "", company: "" },
      ];
      setFormData({
        ...formData,
        positions: newPositions,
      });
    }
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
        .then((dataUrl: string) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "networking-lock-screen.jpg";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error: unknown) => {
          console.error("Could not generate image", error);
        });
    } else {
      console.error("Element not found");
    }
  };

  return (
    <section
      className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-100"
      id="start"
    >
      <QRCodeCountButtons
        qrCodeCount={formData.qrCodes.length}
        setQRCodeCount={handleQRCountChange}
      />
      <div className="w-full max-w-7xl p-12">
        <h1 className="pb-12 text-5xl font-bold" id="details">
          Add Your Details
        </h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-3">
            <section className="flex flex-col justify-start gap-3">
              <FormFields
                formData={formData}
                handleChange={handleChange}
                addPosition={addPosition}
                removePosition={removePosition}
                handleModelChange={handleModelChange}
                handleImageUpload={handleImageUpload}
                selectedModel={selectedModel}
                dimensions={dimensions}
              />
              <QRCodeFields formData={formData} handleChange={handleChange} />
            </section>
            <aside className="flex justify-center">
              {Phone(dimensions, formData, companyImage)}
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
    </section>
  );
}
