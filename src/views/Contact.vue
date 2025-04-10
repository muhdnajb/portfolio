<script setup>
import { ref } from 'vue';

const formFields = ref([
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
  { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' },
  // { id: 'country', label: 'Country', type: 'text', placeholder: 'Enter your country' },
]);

const countries = ref([
  'United States',
  'Canada',
  'Malaysia',
  'Australia',
  'Germany',
  'France',
  'India',
  'China',
  'Japan',
  'Brazil'
]);

const formData = ref({
  email: '',
  firstName: '',
  lastName: '',
  age: '',
  country: '',
});

const handleSave = () => {
  console.log(12, formData.value)
};

</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-1 md:col-span-1 p-8 flex items-center justify-center">
      <h6>Please take a moment to fill out your information so we can get in touch and ensure we address your request accurately.</h6>
    </div>
    <div class="col-span-1 md:col-span-2 p-8">
      <div>
        <div class="px-4">
          <div v-for="field in formFields" :key="field.id" class="mb-4">
            <label :for="field.id" class="block text-gray-700 font-bold mb-2">{{ field.label }}</label>
            <input
              v-model="formData[field.id]"
              :type="field.type"
              :id="field.id"
              :placeholder="field.placeholder"
              class="w-full px-5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div class="mb-4">
            <label for="country" class="block text-gray-700 font-bold mb-2">Country</label>
            <select
              v-model="formData.country"
              id="country"
              class="w-full px-5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select your country</option>
              <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center p-4">
        <div class="col-12">
          <button @click="handleSave" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="min-width: 200px;">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>