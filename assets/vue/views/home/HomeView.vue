<template>
    <div class="">
        <h1 class="p-2 text-2xl bg-slate-200 text-blue-400">Home</h1>
        <img src="https://picsum.photos/id/174/600/400" alt="">
        <div class="flex flex-col justify-center items-center gap-4">
            <Button>Click me</Button>
            <div>
            <Select>
                <SelectTrigger class="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem v-for="(item, index) in items" 
                            :key="index"
                            :value="item.value">
                            {{ item.label }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {ref} from 'vue'

interface Select<T> {
    label: T
    value: T
}

const items = ref<Select<string>[]>([
    {label: "Apple", value: "apple"},
    {label: "Banana", value: "banana"},
    {label: "Blueberry", value: "blueberry"},
    {label: "Grapes", value: "grapes"},
    {label: "Pineapple", value: "pineapple"},
    {label: "Mango", value: "mango"}
])

</script>
<style lang="">
    
</style>