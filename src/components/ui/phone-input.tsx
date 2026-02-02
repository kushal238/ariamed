
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext, Control, FieldValues, Path } from "react-hook-form";
import { customList } from "country-codes-list";
import { useMemo } from "react";

const countryCodes = customList("countryCode", "{countryCode} +{countryCallingCode}");

// Memoize the country list items to prevent re-rendering on every keystroke
const countryOptions = Object.entries(countryCodes).map(([code, label]) => ({
  code,
  label,
}));

interface PhoneInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

export function PhoneInput<TFieldValues extends FieldValues = FieldValues>({
  control,
  name
}: PhoneInputProps<TFieldValues>) {
  const { watch } = useFormContext();
  const countryCode = watch(`${name}CountryCode`) || "IN";
  
  // Memoize the rendered SelectItems to prevent re-creation on every render
  const countryItems = useMemo(() => {
    return countryOptions.map(({ code, label }) => (
      <SelectItem key={code} value={code}>
        {label}
      </SelectItem>
    ));
  }, []);
  
  return (
    <FormItem>
      <FormLabel>Phone Number *</FormLabel>
      <div className="flex gap-2">
        <div className="w-[140px] flex-shrink-0">
          <FormField
            control={control}
            name={`${name}CountryCode` as Path<TFieldValues>}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value || "IN"}
                  >
                    <SelectTrigger className="[&>span]:line-clamp-1">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryItems}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input 
                  placeholder="98765 43210" 
                  {...field} 
                  type="tel"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormMessage />
    </FormItem>
  );
}
