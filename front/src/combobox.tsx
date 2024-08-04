"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const cidades = [
  {
    value: "São Luís",
    label: "São Luís",
  },
  {
    value: "caxias",
    label: "Caxias",
  },
  {
    value: "barreirinhas",
    label: "Barreirinhas",
  },
 
]

interface comboboxProps {
  onSelectCidade: Function
}

export default function ComboboxDemo(props:comboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleSelect = (currentValue:String) => {
    const selectedCity = currentValue === value ? "" : currentValue;
    setValue(selectedCity);
    setOpen(false);
    props.onSelectCidade(selectedCity); // Chama a função de callback ao selecionar a cidade
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? cidades.find((cidade) => cidade.value === value)?.label
            : "Selecione a cidade..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Busque a cidade..." className="h-9" />
          <CommandEmpty>No cidade found.</CommandEmpty>
          <CommandGroup>
            {cidades.map((cidade) => (
              <CommandList key={cidade.value}>

              <CommandItem
                value={cidade.value}
                onSelect={handleSelect}
                >
                {cidade.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === cidade.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            </CommandList>
            ))}
          </CommandGroup>
        </Command>
        </PopoverContent>
        </Popover>
  )
}



