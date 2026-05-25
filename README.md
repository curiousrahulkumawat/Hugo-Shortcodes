# Hugo-Shortcodes
A collection of modern, independent Hugo shortcodes designed for easy integration and customization. Each shortcode works standalone, making it simple to copy, implement, and use without additional dependencies.

# Filetree Shortcode Example

{{< filetree/container >}}

  {{< filetree/folder name="Animals" >}}
  
    {{< filetree/file name="Fish" >}}
    
    {{< filetree/folder name="Mammals" state="closed" >}}
    
      {{< filetree/file name="Dog" >}}
      
      {{< filetree/file name="Cat" >}}
      
      {{< filetree/file name="Elephant" >}}
      
    {{< /filetree/folder >}}
    
  {{< /filetree/folder >}}
  
  {{< filetree/file name="Crocodile" >}}
  
{{< /filetree/container >}}
