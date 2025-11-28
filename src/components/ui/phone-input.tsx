
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { customList } from "country-codes-list";

const countryCodes = customList("countryCode", "{countryCode} +{countryCallingCode}");

export function PhoneInput({ control, name }: { control: any, name: string }) {
  const { setValue, watch } = useFormContext();
  const countryCode = watch(`${name}CountryCode`) || "IN";
  
  return (
    <FormItem>
      <FormLabel>Phone Number *</FormLabel>
      <div className="flex gap-2">
        <div className="w-[140px] flex-shrink-0">
          <FormField
            control={control}
            name={`${name}CountryCode`}
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
                      {Object.entries(countryCodes).map(([code, label]) => (
                        <SelectItem key={code} value={code}>
                          {label}
                        </SelectItem>
                      ))}
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
