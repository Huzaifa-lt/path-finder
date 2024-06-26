import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const InteractiveFleet = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div>
      <div className=" py-5 px-6 flex items-center justify-between border-b border-[#E7E9EB]">
        <h3 className=" text-xl font-medium text-black">
          Interactive Fleet/Route Map
        </h3>
      </div>
      <div className=" mt-5 mx-6 ">
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Location"}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search for airlines" />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {/* {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))} */}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className=" max-w-full  h-[474px]">
          <img
            src="./map.png"
            className=" w-full h-full object-cover rounded-2xl "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InteractiveFleet;
