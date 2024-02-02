/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TinaField, wrapFieldsWithMeta } from "tinacms";
import { useCMS } from 'tinacms';

export const CustomTinaImageField: TinaField = {
  type: "image",
  name: "url",
  label: "Image",
  ui: {
    component: wrapFieldsWithMeta(({ field, input, meta }) => {
      const cms = useCMS();
      return (
        <div>
          <div className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2 mt-4">
            Preview
          </div>
          <div className="flex">
            <div
              className="block max-w-full rounded shadow overflow-hidden max-h-48 lg:max-h-64 h-auto object-contain transition-opacity duration-100 ease-out m-0 bg-gray-200 bg-auto bg-center bg-no-repeat min-w-[12rem]"
              onClick={() => cms.media.open({
                onSelect: media => {
                  input.onChange({ target: { value: media.src } });
                }
              })}
            >
              {input.value && <img
                src={input.value}
                className="w-full h-full"

                alt="preview" />
              }
            </div>
            <button
              disabled={!input.value}
              onClick={() => input.onChange({ target: { value: "" } })}
              className={`icon-parent inline-flex items-center border border-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:shadow-outline text-center inline-flex justify-center transition-all duration-150 ease-out rounded-full shadow text-gray-500 bg-white border border-gray-200 h-9 w-9 ml-2 self-center flex-none ${input.value ? "hover:text-blue-500 hover:bg-gray-50" : ""}`}>
              <svg
                viewBox="0 0 32 32"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-auto">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.9 4.2V6.9H25V8.7H7V6.9H15.1V4.2H16.9ZM7.77201 10.5H24.2279L22.4102 24.1332C22.2853 25.0698 21.4406 25.8 20.4977 25.8H11.5022C10.5561 25.8 9.71404 25.0653 9.58977 24.1332L7.77201 10.5ZM22.172 12.3H9.82791L11.3739 23.8953C11.3788 23.9318 11.4569 24 11.5022 24H20.4977C20.5432 24 20.6209 23.9328 20.6259 23.8953L22.172 12.3Z">
                </path>
              </svg>
            </button>
          </div>
          <div className="block font-sans text-xs font-semibold text-gray-700 whitespace-normal mb-2 mt-4">
            Url
          </div>
          <input
            className="shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md"
            id="image-url"
            type="text"
            // This will pass along props.input.onChange to set our form values as this input changes.
            {...input}
          />
        </div>
      )
    }) as any,
  },
};

