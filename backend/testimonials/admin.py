from django.contrib import admin
from .models import Testimonial


class TestimonialAdmin(admin.ModelAdmin):
  list_display = ('id', 'author_name', 'author_title', 'author_photo')
  list_display_links = ('id', 'author_name')
  search_fields = ('author_name', 'author_title', 'author_photo')
  list_per_page = 20


admin.site.register(Testimonial, TestimonialAdmin)
