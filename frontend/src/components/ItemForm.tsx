import { useAddItemPlacement, useGetItems } from "@/api/ItemApi"
import { useGetRegionLocations } from "@/api/LocationApi"
import { cn } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import type { ItemPlacementInsert } from "backend/src/db/schemas/Item"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Switch } from "./ui/switch"

const formSchema = z.object({
  item: z.string(),
  location: z.string(),
  positionX: z.coerce.number(),
  positionY: z.coerce.number(),
  amount: z.coerce.number(),
  hidden: z.boolean(),
})

export function ItemForm({ position }: { position: L.Point }) {
  const [itemComboBoxOpen, setItemComboBoxOpen] = useState(false)
  const [LocationComboBoxOpen, setLocationComboBoxOpen] = useState(false)

  const useMutation = useAddItemPlacement()
  const { data: items } = useGetItems()
  const { data: locations } = useGetRegionLocations("hoenn")

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    values: {
      item: "",
      location: "",
      amount: 1,
      positionX: Math.round(position.x),
      positionY: Math.round(position.y),
      hidden: false,
    },
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    const itemPlacement: ItemPlacementInsert = {
      amount: values.amount,
      coordinates: [values.positionX, values.positionY],
      isHidden: values.hidden,
      itemId: items?.find(item => item.name === values.item)?.id ?? 0,
      locationId: locations?.find(location => location.name === values.location)?.id ?? 0,
    }
    useMutation.mutate(itemPlacement)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem className="m-1 flex">
              <FormLabel>Item</FormLabel>
              <Popover
                open={itemComboBoxOpen}
                onOpenChange={() => setItemComboBoxOpen(!itemComboBoxOpen)}
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-42 justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                      onClick={() => setItemComboBoxOpen(true)}
                    >
                      {field.value
                        ? items?.find(item => item.name === field.value)?.name
                        : "Select item"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-42 p-0">
                  <Command>
                    <CommandInput placeholder="Search item..." />
                    <CommandList>
                      <CommandEmpty>No item found.</CommandEmpty>
                      <CommandGroup>
                        {items?.map(item => (
                          <CommandItem
                            value={item.name}
                            key={item.name}
                            onSelect={() => {
                              form.setValue("item", item.name)
                              setItemComboBoxOpen(false)
                            }}
                          >
                            {item.name}
                            <Check
                              className={cn(
                                "ml-auto",
                                item.name === field.value ? "opacity-100" : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="m-1">
          <FormLabel>Position (X/Y)</FormLabel>
          <div className="flex items-center">
            <FormField
              control={form.control}
              name="positionX"
              render={({ field }) => (
                <FormItem className="m-1">
                  <Input className="w-24" type="number" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="positionY"
              render={({ field }) => (
                <FormItem className="m-1">
                  <Input className="w-24" type="number" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="m-1 flex">
              <FormLabel>Location</FormLabel>
              <Popover
                open={LocationComboBoxOpen}
                onOpenChange={() => setLocationComboBoxOpen(!LocationComboBoxOpen)}
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-42 justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                      onClick={() => setLocationComboBoxOpen(true)}
                    >
                      <span className="overflow-hidden text-ellipsis">
                        {field.value
                          ? locations?.find(location => location.name === field.value)?.name
                          : "Select item"}
                      </span>
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-42 p-0">
                  <Command>
                    <CommandInput placeholder="Search item..." />
                    <CommandList>
                      <CommandEmpty>No item found.</CommandEmpty>
                      <CommandGroup>
                        {locations?.map(location => (
                          <CommandItem
                            value={location.name}
                            key={location.name}
                            onSelect={() => {
                              form.setValue("location", location.name)
                              setLocationComboBoxOpen(false)
                            }}
                          >
                            {location.name}
                            <Check
                              className={cn(
                                "ml-auto",
                                location.name === field.value ? "opacity-100" : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="m-1 flex">
              <FormLabel>Amount</FormLabel>
              <Input className="w-16" type="number" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hidden"
          render={({ field }) => (
            <FormItem className="m-1 flex">
              <FormLabel>Hidden</FormLabel>
              <Switch checked={field.value} onCheckedChange={field.onChange}></Switch>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
