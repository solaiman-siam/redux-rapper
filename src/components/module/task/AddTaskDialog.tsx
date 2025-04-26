import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export function AddTaslDoalog() {

    const form = useForm()

    const onSubmit = (data ) => {
        console.log(data);
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Add Task
        </Button>
      </DialogTrigger>
      <DialogDescription className="sr-only"></DialogDescription>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Taks</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem  >
                <FormLabel />
                <FormControl>
                    <Input {...field} value={field.value || ''}/>
                </FormControl>
              </FormItem>
            )}
          />
          <DialogFooter className="pt-4">
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
